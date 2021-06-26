import { call, put, takeLatest } from "redux-saga/effects";
import { ProfilePicApi } from "../../services/profilePic.service";
import { getProfilePic, GET_PROFILE_PIC } from "../action/profilePic.actions";

function* fetchProfilePic(){
    try{
        const {data} = yield call(ProfilePicApi.getProfilePic);
        yield put(getProfilePic.success(data))
    }catch(e){
        yield put(getProfilePic.failure(e))
    }
}


function* ProfilePicSaga(){
    yield takeLatest(GET_PROFILE_PIC.REQUEST, fetchProfilePic);
}

export default ProfilePicSaga;