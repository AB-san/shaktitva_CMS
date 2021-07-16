import axiosInstance from "./interceptor";

export const MailingListApi = {
    getMailingList: () => {
        // console.log(axiosInstance.get("/newsletter/"));
        return axiosInstance.get("/newsletter/");
    },
    deleteEmail: (data) => {
        // console.log(axiosInstance.delete("/newsletter/delete/",data));
        console.log("data---",data);
        return axiosInstance.post("/newsletter/delete/", {id: data});
    }
}
