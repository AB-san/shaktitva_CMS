import axiosInstance from "./interceptor";

export const ConfigApi = {
    getConfig: () =>{
        console.log(axiosInstance.get("/config"));
        return axiosInstance.get("/config");
    }
}