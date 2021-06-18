import * as NGOActions from '../action/NGO.actions';
const initialState = {
    NGO_en: [],
    NGO_hi: [],
    loadingNgoDetails: false,
    errorNgoDetails: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NGOActions.GET_ENGLISH_NGO_DETAILS.REQUEST:
            return {
                ...state,
                loadingNgoDetails: true,
            };
        case NGOActions.GET_ENGLISH_NGO_DETAILS.SUCCESS:
            return {
                ...state,
                NGO_en: action.payload.ngo,
                loadingNgoDetails: false,
            };
        case NGOActions.GET_ENGLISH_NGO_DETAILS.FAILURE:
            return {
                ...state,
                errorNgoDetails: action.payload,
                loadingNgoDetails: false,
            };
        case NGOActions.GET_HINDI_NGO_DETAILS.REQUEST:
            return {
                ...state,
                loadingNgoDetails: true
            };
        case NGOActions.GET_HINDI_NGO_DETAILS.SUCCESS:
            return {
                ...state,
                NGO_hi: action.payload.ngo,
                loadingNgoDetails: false
            };
        case NGOActions.GET_HINDI_NGO_DETAILS.FAILURE:
            return {
                ...state,
                errorNgoDetails: action.payload,
                loadingNgoDetails: false
            };
        default:
            return state;
    }
}