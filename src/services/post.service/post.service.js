import {jphAxiosService} from "../axios.services/jphAxiosService";
import {urlsJph} from "../../configs";

const postService = {
    getAll: ()=>jphAxiosService.get(urlsJph.posts).then(value => value.data),
}

export {postService};