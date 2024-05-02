import axios from "axios";
import { BACKEND_URL } from "./env";

axios.defaults.baseURL = BACKEND_URL
axios.interceptors.request.use(config => {
    config.onDownloadProgress = (progressEvent) => { console.log({ ...progressEvent }) }
    return config;
    // config.headers.aaa = 'aaa'
    // config.cancelToken = new cancelToken(function (cancel) {
    // })
})

export default axios