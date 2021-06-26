import * as profilePicActions from '../action/profilePic.actions';

const initialState = {
    profilePic:[],
    loadingProfilePic: false,
    errorProfilePic: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case profilePicActions.GET_PROFILE_PIC.REQUEST:
            return {
                ...state,
                loadingProfilePic: true,
            };
        case profilePicActions.GET_PROFILE_PIC.SUCCESS:
            return {
                ...state,
                profilePic: action.payload.images,
                loadingProfilePic: false,
            };
        case profilePicActions.GET_PROFILE_PIC.FAILURE:
            return {
                ...state,
                errorProfilePic: action.payload,
                loadingProfilePic: false,
            };
        default:
            return state;
    }
}