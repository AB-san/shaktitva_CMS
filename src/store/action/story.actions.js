import { createRequestTypes, action } from "../../utils/redux";

export const GET_ENGLISH_STORIES = createRequestTypes("GET_ENGLISH_STORIES");

export const GET_HINDI_STORIES = createRequestTypes("GET_HINDI_STORIES");

export const CHANGE_LANG = "CHANGE_LANG";

export const getEnglishStories = {
  request: () => action(GET_ENGLISH_STORIES.REQUEST),
  success: (data) => action(GET_ENGLISH_STORIES.SUCCESS, data),
  failure: (error) => action(GET_ENGLISH_STORIES.FAILURE, error),
};

export const getHindiStories = {
  request: () => action(GET_HINDI_STORIES.REQUEST),
  success: (data) => action(GET_HINDI_STORIES.SUCCESS, data),
  failure: (error) => action(GET_HINDI_STORIES.FAILURE, error),
};
