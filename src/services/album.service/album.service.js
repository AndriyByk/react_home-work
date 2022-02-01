import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../configs/urls";

const albumService = {
    getAll: () => axiosService.get(urls.albums).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.albumsOfUser}${id}`).then(value => value.data)
}

export {albumService};