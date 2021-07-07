import axiosInstance from "./interceptor";

export const UsersApi = {
    getUsers: () =>{
        console.log(axiosInstance.get("/users"));
        return axiosInstance.get("/users");
    }
}