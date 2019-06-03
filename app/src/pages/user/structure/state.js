import { Service, action } from "adajs";
import Tree from "ada-dashboard/src/compose/curdtree";
import Table from "ada-dashboard/src/compose/curd";
import Input from 'ada-dashboard/src/modules/form/input';

class StructureService extends Service {
	defaultData() {
		return {
			treeType: Tree,
			topTableType: Table,
			bottomTableType: Table,
			treeOption: {
				title: '组织机构',
				url: '/api/user/tree',
				editURL: '',
				check: false,
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				addURL: '/api/user/tree/add',
				addFields: [
					{ type: Input, label: '部门名称', name: 'nodeName', required: true },
					{ type: Input, label: '部门简介', name: 'nodeDesc' }
				],
				removeURL: ''
			},
			topTableOption: {
				title: '组织角色',
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' }
				],
				borderLeft: false,
				borderBottom: false,
				borderRight: false,
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
					tools: []
				}
			},
			bottomTableOption: {
				title: '组织人员',
				borderLeft: false,
				borderTop: false,
				borderRight: false,
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				searchURL: '',
				detailURL: '/detail.json',
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				filterFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				tableOption: {
					url: '/api/user/list',
					cols: [
						{ title: "UserName", key: "username", width: 200 },
						{ title: "NickName", key: "nickname", width: 300 }
					],
					toolPosition: 'right',
					tools: []
				}
			},
			_currentNode: null
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action('set-current-node')
	setCurrentNode(current, node) {
		current._currentNode = node;
	}
}

export default StructureService;