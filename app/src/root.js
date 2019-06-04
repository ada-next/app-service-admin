import { root, StaticViewGroup, handler } from "adajs";
import Container from 'ada-dashboard/src/main/container';
import './style/style.css';
import './style/index.css';
import Login from './pages/login';
@root()
class Root extends StaticViewGroup {
    oncreated() {
        this.token = '';
        this.context.request.addRequestTransformer((request) => {
            request.headers.token = this.token;
        });
        this.context.request.addResponseTransformer((response, a) => {
            let { code } = a || {};
            if (code === 2) {
                this.dispatchEvent('to-login');
            }
            return a;
        });
    }

    onready() {
        this.addContainer();
    }

    addContainer() {
        return this.addChild(Container, {
            name: 'container',
            parameter: {
                menuURL: '/api/permision/map',
                indexPage: 'pages/index/index.js'
            }
        });
    }

    @handler('to-login')
    toLogin() {
        this.removeChildByName('container');
        this.addChild(Login, {
            name: 'login'
        });
    }

    @handler('login-done')
    loginDone({ data }) {
        this.token = data;
        this.removeChildByName('login');
        this.addContainer();
    }
}

export default Root;