import {carAxiosService} from "../axios.services/carAxiosService";
import {urlsCar} from "../../configs";

export const carService = {
    create:(car)=>carAxiosService.post(urlsCar.cars, car).then(value => value.data),
    getAll:()=>carAxiosService.get(urlsCar.cars).then(value => value.data),
    getById:(id)=>carAxiosService.get(`${urlsCar.cars}/${id}`).then(value => value.data),
    updateById:(id, car)=>carAxiosService.patch(`${urlsCar.cars}/${id}`, car).then(value => value.data),
    deleteById:(id)=>carAxiosService.delete(`${urlsCar.cars}/${id}`)
}