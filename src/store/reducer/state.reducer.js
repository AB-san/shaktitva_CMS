import * as stateActions from '../action/state.actions';
const initialState = {
    state_en: [],
    state_hi: [],
    loadingStateDetails: false,
    errorStateDetails: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case stateActions.GET_ENGLISH_STATE.REQUEST:
            return {
                ...state,
                loadingStateDetails: true,
            };
        case stateActions.GET_ENGLISH_STATE.SUCCESS:
            return {
                ...state,
                state_en: action.payload.state,
                loadingStateDetails: false,
            };
        case stateActions.GET_ENGLISH_STATE.FAILURE:
            return {
                ...state,
                errorStateDetails: action.payload,
                loadingStateDetails: false,
            };
        case stateActions.GET_HINDI_STATE.REQUEST:
            return {
                ...state,
                loadingStateDetails: true
            };
        case stateActions.GET_HINDI_STATE.SUCCESS:
            return {
                ...state,
                state_hi: action.payload.state,
                loadingStateDetails: false
            };
        case stateActions.GET_HINDI_STATE.FAILURE:
            return {
                ...state,
                errorStateDetails: action.payload,
                loadingStateDetails: false
            };
        default:
            return state;
    }
}