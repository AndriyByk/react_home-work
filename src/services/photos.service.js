import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const photosService = {
    getAll: ()=>axiosService.get(urls.photos).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.photosOfAlbum}${id}`).then(value => value.data)
}