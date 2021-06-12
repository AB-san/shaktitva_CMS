import * as StoriesActions from '../action/story.actions';

const initialState = {
    en:[],
    hi:[],
    loadingStories: false,
    errorStories: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case StoriesActions.GET_ENGLISH_STORIES.REQUEST:
            return {
                ...state,
                loadingStories: true,
            };
        case StoriesActions.GET_ENGLISH_STORIES.SUCCESS:
            return {
                ...state,
                en: action.payload.stories,
                loadingStories: false,
            };
        case StoriesActions.GET_ENGLISH_STORIES.FAILURE:
            return {
                ...state,
                errorStories: action.payload,
                loadingStories: false,
            };
        case StoriesActions.GET_HINDI_STORIES.REQUEST:
            return {
                ...state,
                loadingStories: true
            };
        case StoriesActions.GET_HINDI_STORIES.SUCCESS:
            return {
                ...state,
                hi: action.payload.stories,
                loadingStories: false
            };
        case StoriesActions.GET_HINDI_STORIES.FAILURE:
            return {
                ...state,
                errorStories: action.payload,
                loadingStories: false
            };
        default:
            return state;
    }
}