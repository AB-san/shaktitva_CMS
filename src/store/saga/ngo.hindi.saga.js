import { call, put, takeLatest } from "redux-saga/effects";
import { NgoApi } from "../../services/ngo.service";
import { GET_HINDI_NGO_DETAILS,getHindiNgoDetails } from "../action/NGO.actions";

function* fetchNGO(){
    try{
        const {data} = yield call(NgoApi.getNgoHin);
        yield put(getHindiNgoDetails.success(data))
    }catch(e){
        yield put(getHindiNgoDetails.failure(e))
    }
}


function* hindiNgoSaga(){
    yield takeLatest(GET_HINDI_NGO_DETAILS.REQUEST, fetchNGO);
}

export default hindiNgoSaga;