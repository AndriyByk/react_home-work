import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: ()=>axiosService.get(urls.posts).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.post}${id}`).then(value => value.data),
    getCommentsById: (id)=>axiosService.get(`${urls.commentsOfPost}${id}`).then(value => value.data)

}