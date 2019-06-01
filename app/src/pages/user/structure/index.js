import {view,BondViewGroup} from "adajs";
import StructureService from "./state.js";

@view({
    className:"pages-user-structure",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:StructureService
    }
})
class Structure extends BondViewGroup{
}

export default Structure;