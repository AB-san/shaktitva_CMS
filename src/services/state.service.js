import axiosInstance from "./interceptor";

export const StateApi = {
    getStateEng: ()=>{
        console.log(axiosInstance.get("/en/state/all/"));
        return axiosInstance.get("/en/state/all/");
    },
    getStateHin: ()=>{
        console.log(axiosInstance.get("/hi/state/all"));
        return axiosInstance.get("/hi/state/all");
    }
}