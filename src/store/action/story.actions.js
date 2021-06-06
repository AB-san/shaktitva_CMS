import { createRequestTypes, action } from "../../utils/redux";

export const GET_STORIES = createRequestTypes("GET_STORIES");

export const getStories = {
    request: () => action(GET_STORIES.REQUEST),
    success: (data) => action(GET_STORIES.SUCCESS, data),
    failure: (error) => action(GET_STORIES.FAILURE, error),
  };
 