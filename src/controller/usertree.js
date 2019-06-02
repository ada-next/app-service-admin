const { Controller } = require("ada-cloud-util/boost");

class UserTreeController extends Controller {
    static configure = {
        basePath: "/api/usertree",
        actions: {
            getAllUserTree: { path: "/map", method: 'get' },
            addPermisionNode: { path: "/add", method: 'post' },
            editPermisonNode: { path: "/edit", method: 'post' },
            removePermisionNode: { path: "/remove", method: 'post' }
        }
    }

    getAllUserTree() {
        return this.service.get('/app-service-uc/usertree/map');
    }

    addUserTreeNode({ request }) {
        return this.service.post('/app-service-uc/usertree/add', request.body);
    }

    removeUserTreeNode({ request }) {
        return this.service.post('/app-service-uc/usertree/edit', request.body);
    }

    editUserTreeNode({ request }) {
        return this.service.post('/app-service-uc/usertree/remove', request.body);
    }
}

module.exports = UserTreeController;