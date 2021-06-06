import * as StoriesActions from '../action/story.actions';

const initialState = {
    stories: [],
    loadingStories: false,
    errorStories: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case StoriesActions.GET_STORIES.REQUEST:
            return {
                ...state,
                loadingStories: true,
            };
        case StoriesActions.GET_STORIES.SUCCESS:
            return {
                ...state,
                stories: action.payload.stories,
                loadingStories: false,
            };
        case StoriesActions.GET_STORIES.FAILURE:
            return {
            ...state,
            errorStories: action.payload,
            loadingStories: false,
            };
        default:
            return state;
    }
}