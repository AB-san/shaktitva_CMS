import axiosInstance from "./interceptor";

export const LegalApi = {
    getLegalEng: ()=>{
        console.log(axiosInstance.get("/en/legal/all/"));
        return axiosInstance.get("/en/legal/all/");
    },
    getLegalHin: ()=>{
        console.log(axiosInstance.get("/hi/legal/all"));
        return axiosInstance.get("/hi/legal/all");
    }
}