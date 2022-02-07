import axiosService from "../axios.service/axios.service";
import {movieUrl} from "../../constants/urls/urls";

export const movieService = {
    getAll:()=> axiosService.get(movieUrl.page1).then(value => value.data)
}