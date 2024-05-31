import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccesToken, removeAccesToken } from "../utils/local-storage";
import log from "../utils/log";

axios.defaults.baseURL = BACKEND_URL
axios.interceptors.request.use(config => {
    log(config)
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