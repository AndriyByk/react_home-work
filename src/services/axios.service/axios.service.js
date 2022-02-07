import axios from "axios";
import baseURL from "../../constants/urls/urls";


const axiosService = axios.create({
    baseURL, headers: {
        Authorization: 'Bearer '
    }
});

export default axiosService;