import {view,ViewGroup} from "adajs";
import IndexService from "./state.js";
import Index from "ada-dashboard/src/main/index";

@view({
    className:"pages-index",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:IndexService
    }
})
class IndexPage extends ViewGroup{
    tags(){
        return {index:Index}
    }
}

export default IndexPage;