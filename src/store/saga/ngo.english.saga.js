import { call, put, takeLatest } from "redux-saga/effects";
import { NgoApi } from "../../services/ngo.service";
import { getEnglishNgoDetails, GET_ENGLISH_NGO_DETAILS } from "../action/NGO.actions";

function* fetchNGO(){
    try{
        const {data} = yield call(NgoApi.getNgoEng);
        yield put(getEnglishNgoDetails.success(data))
    }catch(e){
        yield put(getEnglishNgoDetails.failure(e))
    }
}


function* englishNgoSaga(){
    yield takeLatest(GET_ENGLISH_NGO_DETAILS.REQUEST, fetchNGO);
}

export default englishNgoSaga;