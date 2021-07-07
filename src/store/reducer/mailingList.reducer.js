import * as mailingListActions from '../action/mailingList.actions';

const initialState = {
    mailingList: [],
    loadingMailingList: false,
    errorMailingList: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case mailingListActions.GET_MAILING_LIST.REQUEST:
            return {
                ...state,
                loadingMailingList: true,
            };
        case mailingListActions.GET_MAILING_LIST.SUCCESS:
            return {
                ...state,
                mailingList: action.payload.emails,
                loadingMailingList: false,
            };
        case mailingListActions.GET_MAILING_LIST.FAILURE:
            return {
                ...state,
                errorMailingList: action.payload,
                loadingMailingList: false,
            };
        default:
            return state;

    }
}