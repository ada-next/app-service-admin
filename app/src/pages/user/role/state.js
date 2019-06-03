import { Service, action } from "adajs";
import Input from "ada-dashboard/src/modules/form/input";
import Table from "ada-dashboard/src/compose/curd";
import Tree from "ada-dashboard/src/compose/curdtree";

class RoleService extends Service {
	defaultData() {
		return {
			tableType: Table,
			treeType: Tree,
			tableOption: {
				title: '角色列表',
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' }
				],
				editURL: '/api/role/edit',
				addURL: '/api/role/add',
				removeURL: '/api/role/remove',
				detailURL: '/detail.json',
				editFields: [
					{ type: Input, label: 'Role Name', name: 'roleName' },
					{ type: Input, label: 'Role Description', name: 'roleDesc' }
				],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'Role Name', name: 'roleName' },
					{ type: Input, label: 'Role Description', name: 'roleDesc' },
				],
				filterFields: [
					{ type: Input, label: 'Role Name', name: 'roleName' }
				],
				tableOption: {
					url: '/api/role/list',
					cols: [{ title: "Role Name", key: "roleName", width: 200 }, { title: "Role Description", key: "roleDesc", width: 300 }],
					toolPosition: 'right',
					multiCheck: false,
					checkbox:false,
					tools: [
						{ title: 'edit', action: 'edit', icon: 'ada-dashboard-mode_edit' },
						{ title: 'remove', action: 'remove', icon: "ada-dashboard-close" }
					]
				}
			},
			treeOption: {
				title: '权限管理',
				url: '/api/permision/map',
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				addURL: '/api/permision/add',
				editURL: '/api/permision/edit',
				addFields: [
					{ type: Input, label: 'name', name: 'actionName' },
					{ type: Input, label: 'desc', name: 'actionDesc' },
					{ type: Input, label: 'path', name: 'actionPath' },
					{ type: Input, label: 'page', name: 'actionPage' },
					{ type: Input, label: 'icon', name: 'actionIcon' }
				],
				removeURL: '/api/permision/remove',
				parentNodeName: 'actionParentId'
			},
			_selectedRole: null
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}

	@action('set-select-role')
	setSelectRole(current, role) {
		current._selectedRole = role;
	}
}

export default RoleService;