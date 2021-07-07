import { createRequestTypes, action } from "../../utils/redux";

export const GET_USERS = createRequestTypes("GET_USERS");

export const getUsers = {
  request: () => action(GET_USERS.REQUEST),
  success: (data) => action(GET_USERS.SUCCESS, data),
  failure: (error) => action(GET_USERS.FAILURE, error),
};