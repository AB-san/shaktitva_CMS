import { createRequestTypes, action } from "../../utils/redux";

export const GET_ENGLISH_STATE = createRequestTypes("GET_ENGLISH_STATE");

export const GET_HINDI_STATE = createRequestTypes("GET_HINDI_STATE");

export const getEnglishState = {
  request: () => action(GET_ENGLISH_STATE.REQUEST),
  success: (data) => action(GET_ENGLISH_STATE.SUCCESS, data),
  failure: (error) => action(GET_ENGLISH_STATE.FAILURE, error),
};

export const getHindiState = {
  request: () => action(GET_HINDI_STATE.REQUEST),
  success: (data) => action(GET_HINDI_STATE.SUCCESS, data),
  failure: (error) => action(GET_HINDI_STATE.FAILURE, error),
};
