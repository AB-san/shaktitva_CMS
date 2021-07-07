import axiosInstance  from "./interceptor";

export const MailingListApi = {
    getMailingList: () =>{
        console.log(axiosInstance.get("/newsletter/"));
        return axiosInstance.get("/newsletter/");
    }
} 