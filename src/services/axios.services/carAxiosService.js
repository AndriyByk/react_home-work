import axios from "axios";

import {baseUrlCar} from "../../configs";

export const carAxiosService = axios.create({baseURL: baseUrlCar});

