import { view, BondViewGroup, handler } from "adajs";
import StructureService from "./state.js";
import Loading from "ada-dashboard/src/modules/loading";
import Toast from "ada-dashboard/src/modules/toast";

@view({
    className: "pages-user-structure",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: StructureService
    }
})
class Structure extends BondViewGroup {
    @handler('tree-active')
    active({ data }) {
        if (data.length > 0) {
            let treeNodeId = data[0].id;
            this.commit('set-current-node', data[0]).then(() => {
                this.addChild(Loading).then(loading => {
                    let userIds = [], roleIds = [];
                    return this.context.request.get('/api/usertreerolemap/roles', { treeNodeId }).then(({ data }) => {
                        roleIds = data.map(a => a.roleId);
                    }).then(() => {
                        return this.context.request.get('/api/usertreemap/userids', { treeNodeId }).then(({ data }) => {
                            userIds = data.map(a => a.userId);
                        });
                    }).then(() => {
                        loading.close();
                        this.getChildByName('roleTable').getChildByName('table').setSelectIds(roleIds);
                        this.getChildByName('userTable').getChildByName('table').setSelectIds(userIds);
                    });
                });
            });
        }
    }

    @handler('table-select-change')
    tableSelectChange({ target, data }) {
        let treeNodeId = "";
        let node = this.getChildByName('tree').getActiveNode();
        if (node) {
            treeNodeId = node.id;
        }
        if (treeNodeId) {
            let parentName = target.getParent().getParent().getName();
            let { add, remove } = data;
            let map = {
                roleTable: {
                    add: '/api/usertreerolemap/addrole',
                    remove: '/api/usertreerolemap/removerole',
                    propName: 'roleId'
                },
                userTable: {
                    add: '/api/usertreemap/adduser',
                    remove: '/api/usertreemap/removeuser',
                    propName: 'userId'
                }
            };
            let _current = map[parentName];
            this.addChild(Loading).then(loading => {
                let ps = Promise.resolve();
                ps = ps.then(() => {
                    return add.reduce((a, id) => {
                        return a.then(() => {
                            return this.context.request.post(_current.add, { [_current.propName]: id, treeNodeId });
                        });
                    }, Promise.resolve());
                });
                ps = ps.then(() => {
                    return remove.reduce((a, id) => {
                        return a.then(() => {
                            return this.context.request.post(_current.remove, { [_current.propName]: id, treeNodeId });
                        });
                    }, Promise.resolve());
                });
                ps.then(() => {
                    loading.close();
                });
            });
        } else {
            this.addChild(Toast, {
                parameter: {
                    content: "先选择一个部门"
                }
            });
        }
    }
}

export default Structure;