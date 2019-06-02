const { Controller } = require("ada-cloud-util/boost");

class PermisonController extends Controller {
    static configure = {
        basePath: "/api/permision",
        actions: {
            getAllPermisionMap: { path: "/map", method: 'get' },
            addPermisionNode: { path: "/add", method: 'post' },
            editPermisonNode: { path: "/edit", method: 'post' },
            removePermisionNode: { path: "/remove", method: 'post' }
        }
    }

    getAllPermisionMap() {
        return this.service.get('/app-service-uc/permison/map');
    }

    addPermisionNode({ request }) {
        return this.service.post('/app-service-uc/permison/add', request.body);
    }

    editPermisonNode({ request }) {
        return this.service.post('/app-service-uc/permison/edit', request.body);
    }

    removePermisionNode({ request }) {
        return this.service.post('/app-service-uc/permison/remove', request.body);
    }
}

module.exports = PermisonController;