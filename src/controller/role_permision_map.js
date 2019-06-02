const { Controller } = require("ada-cloud-util/boost");

class RolePermisionMapController extends Controller {
    static configure = {
        basePath: "/api/rolepermisionmap",
        actions: {
            getRolePermisionDetail: { path: "/get", method: "get" },
            addOrUpdateRolePermision: { path: "/set", method: "post" }
        }
    }

    getRolePermisionDetail({ request }) {
        return this.service.get('/app-service-uc/rolepermisionmap/get', request.query);
    }

    addOrUpdateRolePermision({ request }) {
        return this.service.post('/app-service-uc/rolepermisionmap/set', request.body);
    }
}

module.exports = RolePermisionMapController;