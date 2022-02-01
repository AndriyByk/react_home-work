import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getAll: () => axiosService.get(urls.albums).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.albumsOfUser}${id}`).then(value => value.data)
}