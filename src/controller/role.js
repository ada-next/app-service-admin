const { Controller } = require("ada-cloud-util/boost");

class RoleController extends Controller {
    static configure = {
        basePath: "/api/role",
        actions: {
            getRoleList: { path: "/list", method: 'get' },
            addRole: { path: "/add", method: 'post' },
            editRole: { path: "/edit", method: 'post' },
            removeRole: { path: "/remove", method: 'post' }
        }
    }

    getRoleList() {
        return this.service.get('/app-service-uc/role/list');
    }

    addRole({ request }) {
        return this.service.post('/app-service-uc/role/add', request.body);
    }

    editRole({ request }) {
        return this.service.post('/app-service-uc/role/edit', request.body);
    }

    removeRole({ request }) {
        return this.service.post('/app-service-uc/role/remove', request.body);
    }
}

module.exports = RoleController;