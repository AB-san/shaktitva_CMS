import * as profilePictureActions from '../action/profilePic.actions';

const initialState = {
    profilePictures:[],
    loadingProfilePictures: false,
    errorProfilePictures: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case profilePictureActions.GET_PROFILE_PICTURE.REQUEST:
            return {
                ...state,
                loadingProfilePictures: true,
            };
        case profilePictureActions.GET_PROFILE_PICTURE.SUCCESS:
            return {
                ...state,
                profilePictures: action.payload.images,
                loadingProfilePictures: false,
            };
        case profilePictureActions.GET_PROFILE_PICTURE.FAILURE:
            return {
                ...state,
                errorProfilePictures: action.payload,
                loadingProfilePictures: false,
            };
        default:
            return state;
    }
}