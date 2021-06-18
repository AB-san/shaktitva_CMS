import axiosInstance from "./interceptor";

export const StoryApi = {
    getStoriesEng: ()=>{
        console.log(axiosInstance.get("/en/stories/all/"));
        return axiosInstance.get("/en/stories/all/");
    },
    getStoriesHin: ()=>{
        console.log(axiosInstance.get("/hi/stories/all"));
        return axiosInstance.get("/hi/stories/all/");
    }
}

