import { createRequestTypes, action } from "../../utils/redux";

export const GET_CONFIG = createRequestTypes("GET_CONFIG");

export const getConfig = {
  request: () => action(GET_CONFIG.REQUEST),
  success: (data) => action(GET_CONFIG.SUCCESS, data),
  failure: (error) => action(GET_CONFIG.FAILURE, error),
};