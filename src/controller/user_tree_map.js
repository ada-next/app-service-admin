const BaseController = require("./base");

class UserTreeMapController extends BaseController {
    static configure = {
        basePath: "/api/usertreemap",
        actions: {
            getUserIdsByTreeNodeId: { path: "/userids", method: "get" },
            addUserIdByTreeNodeId: { path: "/adduser", method: "post" },
            removeUserIdByTreeNodeId: { path: "/removeuser", method: "post" }
        }
    }

    getUserIdsByTreeNodeId({ request }) {
        return this.service.get('/app-service-uc/usertreemap/userids', request.query);
    }

    addUserIdByTreeNodeId({ request }) {
        return this.service.post('/app-service-uc/usertreemap/adduser', request.body);
    }

    removeUserIdByTreeNodeId({ request }) {
        return this.service.post('/app-service-uc/usertreemap/removeuser', request.body);
    }
}

module.exports = UserTreeMapController;