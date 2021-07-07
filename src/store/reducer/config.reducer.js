import * as configActions from '../action/config.actions';

const initialState = {
    config:[],
    loadingConfig: false,
    errorConfig: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case configActions.GET_CONFIG.REQUEST:
            return {
                ...state,
                loadingConfig: true,
            };
        case configActions.GET_CONFIG.SUCCESS:
            return {
                ...state,
                config: action.payload.config,
                loadingConfig: false,
            };
        case configActions.GET_CONFIG.FAILURE:
            return {
                ...state,
                errorConfig: action.payload,
                loadingConfig: false,
            };
        default:
            return state;
    }
} 