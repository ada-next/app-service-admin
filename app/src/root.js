import { root, StaticViewGroup } from "adajs";
import Container from 'ada-dashboard/src/main/container';
import './style/style.css';
import './style/index.css';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Container, {
            parameter: {
                menuURL: '/api/permision/map',
                indexPage: 'pages/index/index.js'
            }
        });
    }
}

export default Root;