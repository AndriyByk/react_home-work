import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../configs/urls";

const photosService = {
    getAll: ()=>axiosService.get(urls.photos).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.photosOfAlbum}${id}`).then(value => value.data)
}

export {photosService};