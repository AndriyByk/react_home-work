import {urls} from "../../configs/urls";
import {axiosService} from "../axios.service/axios.service";

const userService = {
    getAll: ()=>axiosService.get(urls.users).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.user}${id}`).then(value => value.data),
    getPostsById: (id)=>axiosService.get(`${urls.postsOfUser}${id}`).then(value => value.data)
}

export {userService};