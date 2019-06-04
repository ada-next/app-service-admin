import { view, BondViewGroup, binder } from "adajs";
import LoginService from "./state.js";
import Toast from "ada-dashboard/src/modules/toast";

@view({
    className: "main-login",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: LoginService
    }
})
class Login extends BondViewGroup {
    @binder('login')
    login() {
        let username = this.finder('username').getElement().value;
        let password = this.finder('password').getElement().value;
        this.context.request.get('/api/user/login', { username, password }).then(({ code, data, message }) => {
            if (code === 0) {
                this.dispatchEvent('login-done', data);
            } else {
                this.addChild(Toast, {
                    parameter: {
                        content: message
                    }
                });
            }
        });
        
    }
}

export default Login;