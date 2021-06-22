import { createRequestTypes, action } from "../../utils/redux";

export const GET_STORY_CATEGORY = createRequestTypes("GET_STORY_CATEGORY");

export const GET_LEGAL_CATEGORY = createRequestTypes("GET_LEGAL_CATEGORY");

export const getStoryCategory = {
  request: () => action(GET_STORY_CATEGORY.REQUEST),
  success: (data) => action(GET_STORY_CATEGORY.SUCCESS, data),
  failure: (error) => action(GET_STORY_CATEGORY.FAILURE, error),
};

export const getLegalCategory = {
  request: () => action(GET_LEGAL_CATEGORY.REQUEST),
  success: (data) => action(GET_LEGAL_CATEGORY.SUCCESS, data),
  failure: (error) => action(GET_LEGAL_CATEGORY.FAILURE, error),
};
