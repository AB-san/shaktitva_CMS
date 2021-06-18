import { createRequestTypes, action } from "../../utils/redux";

export const GET_ENGLISH_NGO_DETAILS = createRequestTypes("GET_ENGLISH_NGO_DETAILS");

export const GET_HINDI_NGO_DETAILS = createRequestTypes("GET_HINDI_NGO_DETAILS");

export const getEnglishNgoDetails = {
  request: () => action(GET_ENGLISH_NGO_DETAILS.REQUEST),
  success: (data) => action(GET_ENGLISH_NGO_DETAILS.SUCCESS, data),
  failure: (error) => action(GET_ENGLISH_NGO_DETAILS.FAILURE, error),
};

export const getHindiNgoDetails = {
  request: () => action(GET_HINDI_NGO_DETAILS.REQUEST),
  success: (data) => action(GET_HINDI_NGO_DETAILS.SUCCESS, data),
  failure: (error) => action(GET_HINDI_NGO_DETAILS.FAILURE, error),
};
