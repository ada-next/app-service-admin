import {view,BondViewGroup} from "adajs";
import ManageService from "./state.js";
import Table from 'ada-dashboard/src/compose/curd';

@view({
    className:"pages-user-manage",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:ManageService
    }
})
class Manage extends BondViewGroup{
    tags() {
        return {
            table: Table
        };
    }
}

export default Manage;