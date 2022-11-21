import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0OTM4MjhkMTc5ZTk0MWE3ZmYxMjlkZjI0NTRiZCIsInN1YiI6IjYzMTcxODdjMDI4NDIwMDA4MzBlMjA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qU9yVAyFwASAIZO7futzjnIBY2BZuvVw62zAWOprnus`
    return config
})


axiosService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {

        return Promise.reject(error)
    })



export {axiosService}