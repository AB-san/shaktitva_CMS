import { createRequestTypes, action } from "../../utils/redux";

export const GET_ENGLISH_LEGAL = createRequestTypes("GET_ENGLISH_LEGAL");

export const GET_HINDI_LEGAL = createRequestTypes("GET_HINDI_LEGAL");

export const getEnglishLegal = {
  request: () => action(GET_ENGLISH_LEGAL.REQUEST),
  success: (data) => action(GET_ENGLISH_LEGAL.SUCCESS, data),
  failure: (error) => action(GET_ENGLISH_LEGAL.FAILURE, error),
};

export const getHindiLegal = {
  request: () => action(GET_HINDI_LEGAL.REQUEST),
  success: (data) => action(GET_HINDI_LEGAL.SUCCESS, data),
  failure: (error) => action(GET_HINDI_LEGAL.FAILURE, error),
};
