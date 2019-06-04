const BaseController = require("./base");
const Session = require('./../session');

class TextController extends BaseController {
    static configure = {
        basePath: "/api/user",
        actions: {
            login: { path: "/login", method: 'get', needLogin: false },
            getAllUsers: { path: "/list", method: 'get' }
        }
    }

    login({ request }) {
        let { username, password } = request.query;
        return this.service.get('/app-service-uc/user/login', { username, password }).then(({ code, data, message }) => {
            if (code === 0) {
                return Session.set(data, data).then(() => this.success(data));
            } else {
                return this.error(message);
            }
        });
    }

    getAllUsers({ request }) {
        return this.service.get('/app-service-uc/user/list', request.query);
    }

}

module.exports = TextController;