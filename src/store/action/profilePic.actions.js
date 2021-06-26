import { createRequestTypes, action } from "../../utils/redux";

export const GET_PROFILE_PIC = createRequestTypes("GET_PROFILE_PIC");

export const getProfilePic = {
  request: () => action(GET_PROFILE_PIC.REQUEST),
  success: (data) => action(GET_PROFILE_PIC.SUCCESS, data),
  failure: (error) => action(GET_PROFILE_PIC.FAILURE, error),
};
