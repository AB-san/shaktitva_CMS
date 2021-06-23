import axiosInstance from "./interceptor";

export const StatesApi = {
    getStatesEng: ()=>{
        console.log(axiosInstance.get("/en/states/all/"));
        return axiosInstance.get("/en/states/all/");
    },
    getStatesHin: ()=>{
        console.log(axiosInstance.get("/hi/states/all"));
        return axiosInstance.get("/hi/states/all");
    }
}