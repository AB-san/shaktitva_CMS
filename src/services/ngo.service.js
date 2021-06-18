import axiosInstance from "./interceptor";

export const NgoApi = {
    getNgoEng: ()=>{
        console.log(axiosInstance.get("/en/ngo/"));
        return axiosInstance.get("/en/ngo/");
    },
    getNgoHin: ()=>{
        console.log(axiosInstance.get("/hi/ngo/"));
        return axiosInstance.get("/hi/ngo/");
    }
}