import { view, BondViewGroup, handler, binder } from "adajs";
import RoleService from "./state.js";
import Loading from "ada-dashboard/src/modules/loading";

@view({
    className: "pages-user-role",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: RoleService
    }
})
class Role extends BondViewGroup {
    @handler('table-tool-tree')
    tableToolTree({ data }) {
        let { row } = data;
        this.commit('set-select-role', row).then(() => {
            this.addChild(Loading).then(loading => {
                let tree = this.getChildByName('tree');
                this.context.request.get('/api/rolepermisionmap/get', { roleId: row.id }).then(({ data }) => {
                    if (data) {
                        tree.setSelects(data.actionIds.split(",") || []);
                    } else {
                        tree.setSelects([]);
                    }
                    loading.close();
                });
            });
        });
    }

    @binder('save')
    save() {
        let selects = this.getChildByName('tree').getSelectedNodes().map(a => a.id);
        let roleId = this.getCurrentState()._selectedRole.id;
        if (roleId) {
            this.addChild(Loading).then(loading => {
                this.context.request.post('/api/rolepermisionmap/set', {
                    roleId,
                    actionIds: selects.join(',')
                }).then(() => {
                    loading.showSuccess();
                    loading.close();
                });
            });
        }
    }
}

export default Role;