import {jphAxiosService} from "../axios.services/jphAxiosService";
import {urlsJph} from "../../configs";

const commentService = {
    getAll: ()=>jphAxiosService.get(urlsJph.comments).then(value => value.data),
}

export {commentService};