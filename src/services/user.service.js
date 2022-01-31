import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: ()=>axiosService.get(urls.users).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.user}${id}`).then(value => value.data),
    getPostsById: (id)=>axiosService.get(`${urls.postsOfUser}${id}`).then(value => value.data)
}