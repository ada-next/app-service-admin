const BaseController = require("./base");

class UserTreeRoleMapController extends BaseController {
    static configure = {
        basePath: "/api/usertreerolemap",
        actions: {
            getRoleIdsByTreeNodeId: { path: "/roles", method: "get" },
            addRoleIdByTreeNodeId: { path: "/addrole", method: "post" },
            removeRoleIdByTreeNodeId: { path: "/removerole", method: "post" }
        },
    }

    getRoleIdsByTreeNodeId({ request }) {
        return this.service.get('/app-service-uc/usertreerolemap/roles', request.query);
    }

    addRoleIdByTreeNodeId({ request }) {
        return this.service.post('/app-service-uc/usertreerolemap/addrole', request.body);
    }

    removeRoleIdByTreeNodeId({ request }) {
        return this.service.post('/app-service-uc/usertreerolemap/removerole', request.body);
    }
}

module.exports = UserTreeRoleMapController;