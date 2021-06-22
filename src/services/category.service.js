import axiosInstance from "./interceptor";

export const CategoryApi = {
    getStoryCategory: () =>{
        console.log(axiosInstance.get("/category/story/"));
        return axiosInstance.get("/category/story/");
    },
    getLegalCategory: () =>{
        console.log(axiosInstance.get("/category/legal/"));
        return axiosInstance.get("/category/legal/");
    }
}