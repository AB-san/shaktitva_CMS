import * as statesActions from '../action/states.actions';
const initialState = {
    states_en: [],
    states_hi: [],
    loadingStatesDetails: false,
    errorStatesDetails: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case statesActions.GET_ENGLISH_STATES.REQUEST:
            return {
                ...state,
                loadingStatesDetails: true,
            };
        case statesActions.GET_ENGLISH_STATES.SUCCESS:
            return {
                ...state,
                states_en: action.payload.state,
                loadingStatesDetails: false,
            };
        case statesActions.GET_ENGLISH_STATES.FAILURE:
            return {
                ...state,
                errorStatesDetails: action.payload,
                loadingStatesDetails: false,
            };
        case statesActions.GET_HINDI_STATES.REQUEST:
            return {
                ...state,
                loadingStatesDetails: true
            };
        case statesActions.GET_HINDI_STATES.SUCCESS:
            return {
                ...state,
                states_hi: action.payload.state,
                loadingStatesDetails: false
            };
        case statesActions.GET_HINDI_STATES.FAILURE:
            return {
                ...state,
                errorStatesDetails: action.payload,
                loadingStatesDetails: false
            };
        default:
            return state;
    }
}