import * as legalActions from '../action/legal.actions';
const initialState = {
    legal_en: [],
    legal_hi: [],
    loadingLegalDetails: false,
    errorLegalDetails: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case legalActions.GET_ENGLISH_LEGAL.REQUEST:
            return {
                ...state,
                loadingLegalDetails: true,
            };
        case legalActions.GET_ENGLISH_LEGAL.SUCCESS:
            return {
                ...state,
                legal_en: action.payload.legal,
                loadingLegalDetails: false,
            };
        case legalActions.GET_ENGLISH_LEGAL.FAILURE:
            return {
                ...state,
                errorLegalDetails: action.payload,
                loadingLegalDetails: false,
            };
        case legalActions.GET_HINDI_LEGAL.REQUEST:
            return {
                ...state,
                loadingLegalDetails: true
            };
        case legalActions.GET_HINDI_LEGAL.SUCCESS:
            return {
                ...state,
                legal_hi: action.payload.legal,
                loadingLegalDetails: false
            };
        case legalActions.GET_HINDI_LEGAL.FAILURE:
            return {
                ...state,
                errorLegalDetails: action.payload,
                loadingLegalDetails: false
            };
        default:
            return state;
    }
}