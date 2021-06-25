import axiosInstance from "./interceptor";

export const ProfilePicApi = {
    getProfilePic: () =>{
        console.log(axiosInstance.get("/profile/images/all"));
        return axiosInstance.get("/profile/images/all");
    }
}
