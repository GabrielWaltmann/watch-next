import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:4000/'
})

export const api = (axios: AxiosInstance) =>{
    return {
        get: (url: string, config: AxiosRequestConfig = {}) => {
            return axios.get(url, config)
        },
        delete: (url: string, config: AxiosRequestConfig = {}) => {
            return axios.delete(url, config)
        },
        put: (url: string, body: unknown, config: AxiosRequestConfig = {}) => {
            return axios.put(url, body, config)
        },
        post: (url: string, body: unknown, config: AxiosRequestConfig = {}) => {
            return axios.post(url, body, config)
        },
        patch: (url: string, body: unknown, config: AxiosRequestConfig = {}) => {
            return axios.patch(url, body, config)
        },
    }
}