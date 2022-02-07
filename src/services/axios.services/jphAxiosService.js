import axios from "axios";

import {baseUrlJph} from "../../configs";

export const jphAxiosService = axios.create({baseURL: baseUrlJph});
