import { call, put, takeLatest } from "redux-saga/effects";
import { ProfilePicApi } from "../../services/profilePic.service";
import { getProfilePicture, GET_PROFILE_PICTURE } from "../action/profilePic.actions";

function* fetchProfilePic(){
    try{
        const {data} = yield call(ProfilePicApi.getProfilePic);
        yield put(getProfilePicture.success(data))
    }catch(e){
        yield put(getProfilePicture.failure(e))
    }
}


function* ProfilePicSaga(){
    yield takeLatest(GET_PROFILE_PICTURE.REQUEST, fetchProfilePic);
}

export default ProfilePicSaga;