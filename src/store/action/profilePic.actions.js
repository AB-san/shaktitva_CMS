import { createRequestTypes, action } from "../../utils/redux";

export const GET_PROFILE_PICTURE = createRequestTypes("GET_PROFILE_PICTURE");

export const getProfilePicture = {
  request: () => action(GET_PROFILE_PICTURE.REQUEST),
  success: (data) => action(GET_PROFILE_PICTURE.SUCCESS, data),
  failure: (error) => action(GET_PROFILE_PICTURE.FAILURE, error),
};
