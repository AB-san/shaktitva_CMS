import axiosInstance from "./interceptor";

export const StoryApi = {
    getStories: ()=>{
        return axiosInstance.get("/en/stories/all/");
    }
}