import * as categoryActions from '../action/category.actions';

const initialState = {
    story: [],
    legal: [],
    loadingCategory: false,
    errorCategory: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case categoryActions.GET_STORY_CATEGORY.REQUEST:
            return {
                ...state,
                loadingCategory: true,
            };
        case categoryActions.GET_STORY_CATEGORY.SUCCESS:
            return {
                ...state,
                story: action.payload.categories,
                loadingCategory: false,
            };
        case categoryActions.GET_STORY_CATEGORY.FAILURE:
            return {
                ...state,
                errorCategory: action.payload,
                loadingCategory: false,
            };
        case categoryActions.GET_LEGAL_CATEGORY.REQUEST:
            return {
                ...state,
                loadingCategory: true
            };
        case categoryActions.GET_LEGAL_CATEGORY.SUCCESS:
            return {
                ...state,
                legal: action.payload.categories,
                loadingCategory: false
            };
        case categoryActions.GET_LEGAL_CATEGORY.FAILURE:
            return {
                ...state,
                errorCategory: action.payload,
                loadingCategory: false
            };
        default:
            return state;
    }
}