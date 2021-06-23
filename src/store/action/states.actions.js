import { createRequestTypes, action } from "../../utils/redux";

export const GET_ENGLISH_STATES = createRequestTypes("GET_ENGLISH_STATES");

export const GET_HINDI_STATES = createRequestTypes("GET_HINDI_STATES");

export const getEnglishStates = {
  request: () => action(GET_ENGLISH_STATES.REQUEST),
  success: (data) => action(GET_ENGLISH_STATES.SUCCESS, data),
  failure: (error) => action(GET_ENGLISH_STATES.FAILURE, error),
};

export const getHindiStates = {
  request: () => action(GET_HINDI_STATES.REQUEST),
  success: (data) => action(GET_HINDI_STATES.SUCCESS, data),
  failure: (error) => action(GET_HINDI_STATES.FAILURE, error),
};
