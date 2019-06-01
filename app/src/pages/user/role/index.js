import {view,BondViewGroup} from "adajs";
import RoleService from "./state.js";
import Tabletree from "ada-dashboard/src/compose/tabletree";

@view({
    className:"pages-user-role",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:RoleService
    }
})
class Role extends BondViewGroup{
    tags() {
        return { tabletree: Tabletree }
    }
}

export default Role;