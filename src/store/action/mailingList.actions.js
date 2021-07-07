import { createRequestTypes, action } from "../../utils/redux";

export const GET_MAILING_LIST = createRequestTypes("GET_MAILING_LIST");

export const getMailingList ={
    request: () => action(GET_MAILING_LIST.REQUEST),
    success: (data) => action(GET_MAILING_LIST.SUCCESS,data),
    failure: (error) => action(GET_MAILING_LIST.FAILURE,error)
};