const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure = {
        basePath: "/api/user",
        actions: {
            login: { path: "/login", method: 'get' },
            permisions: { path: "/permisions", method: 'get' },
            getAllUsers: { path: "/list", method: 'get' },
            getAllUserTree: { path: "/tree", method: 'get' },
            addUserNode: { path: "/tree/add", method: 'post' }
        }
    }

    login({ request }) {
        let { username, password } = request.query;
    }

    permisions() {
        return this.service.get('/app-service-uc/user/permisions');
    }

    getAllUsers({ request }) {
        return this.service.get('/app-service-uc/user/list', request.query);
    }

    getAllUserTree({ request }) {
        return this.service.get('/app-service-uc/user/tree', request.query);
    }

    addUserNode({ request }) {
        return this.service.post('/app-service-uc/user/tree/add', request.body);
    }
}

module.exports = TextController;