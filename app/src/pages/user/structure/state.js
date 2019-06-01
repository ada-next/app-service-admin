import { Service } from "adajs";
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
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' },
					{ name: "remove", icon: "ada-dashboard-close", action: 'remove' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				searchURL: '',
				detailURL: '/detail.json',
				borderLeft: false,
				borderBottom:false,
				borderRight:false,
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
					url: '/table.json',
					cols: [{ title: "Name", key: "name", width: 200 }, { title: "Age", key: "age", width: 300 }, { title: "BirthDay", key: "birthday", width: 300 }],
					toolPosition: 'right',
					tools: [
						{ title: 'detail', action: 'detail', icon: "ada-dashboard-description" },
						{ title: 'edit', action: 'edit', icon: 'ada-dashboard-mode_edit' },
						{ title: 'remove', action: 'remove', icon: "ada-dashboard-close" }
					]
				}
			},
			bottomTableOption: {
				title: '组织人员',
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' },
					{ name: "remove", icon: "ada-dashboard-close", action: 'remove' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				searchURL: '',
				detailURL: '/detail.json',
				borderLeft: false,
				borderTop:false,
				borderRight:false,
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
					url: '/table.json',
					cols: [{ title: "Name", key: "name", width: 200 }, { title: "Age", key: "age", width: 300 }, { title: "BirthDay", key: "birthday", width: 300 }],
					toolPosition: 'right',
					tools: [
						{ title: 'detail', action: 'detail', icon: "ada-dashboard-description" },
						{ title: 'edit', action: 'edit', icon: 'ada-dashboard-mode_edit' },
						{ title: 'remove', action: 'remove', icon: "ada-dashboard-close" }
					]
				}
			}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default StructureService;