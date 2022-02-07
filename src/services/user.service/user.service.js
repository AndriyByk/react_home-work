import {jphAxiosService} from "../axios.services/jphAxiosService";
import {urlsJph} from "../../configs";

const userService = {
    getAll: ()=>jphAxiosService.get(urlsJph.users).then(value => value.data),
}

export {userService};