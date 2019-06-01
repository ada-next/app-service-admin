const PrivateVerifiyer = require("ada-cloud-util/verifier/private");
const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure = {
        basePath: "/api",
        actions: {
            login: { path: "/login", method: 'get' },
            permisions: { path: "/permisions", method: 'get' },
            getAllUsers: { path: "/user/list", method: 'get' }
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
}

module.exports = TextController;