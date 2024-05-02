import axios from "axios";
import { BACKEND_URL } from "./env";

axios.defaults.baseURL = BACKEND_URL
// axios.interceptors.request.use(config => {
//     console.log(config.headers)
//     config.onDownloadProgress = (progressEvent) => {
//         console.log({ ...progressEvent })
//     }

//     config.onUploadProgress = (progressEvent) => {
//         console.log({ ...progressEvent })
//     }

//     return config;
// })

export default axios