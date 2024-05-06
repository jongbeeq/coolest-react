import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccesToken, removeAccesToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL
axios.interceptors.request.use(config => {
    console.log(config)
    const token = getAccesToken()
    if (token) {
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
})
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        removeAccesToken()
    }
    return Promise.reject(error)
})

export default axios