import {urls} from "../../configs/urls";
import {axiosService} from "../axios.service/axios.service";

const postService = {
    getAll: ()=>axiosService.get(urls.posts).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.post}${id}`).then(value => value.data),
    getCommentsById: (id)=>axiosService.get(`${urls.commentsOfPost}${id}`).then(value => value.data)
}

export {postService};