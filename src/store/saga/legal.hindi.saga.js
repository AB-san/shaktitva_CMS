import { call, put, takeLatest } from "redux-saga/effects";
import { LegalApi } from "../../services/legal.service";
import { getHindiLegal, GET_HINDI_LEGAL } from "../action/legal.actions";

function* fetchLegal(){
    try{
        const {data} = yield call(LegalApi.getLegalHin);
        yield put(getHindiLegal.success(data))
    }catch(e){
        yield put(getHindiLegal.failure(e))
    }
}


function* hindiLegalSaga(){
    yield takeLatest(GET_HINDI_LEGAL.REQUEST, fetchLegal);
}

export default hindiLegalSaga;