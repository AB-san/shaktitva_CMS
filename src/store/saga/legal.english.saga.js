import { call, put, takeLatest } from "redux-saga/effects";
import { LegalApi } from "../../services/legal.service";
import { getEnglishLegal, GET_ENGLISH_LEGAL } from "../action/legal.actions";

function* fetchLegal(){
    try{
        const {data} = yield call(LegalApi.getLegalEng);
        yield put(getEnglishLegal.success(data))
    }catch(e){
        yield put(getEnglishLegal.failure(e))
    }
}


function* englishLegalSaga(){
    yield takeLatest(GET_ENGLISH_LEGAL.REQUEST, fetchLegal);
}

export default englishLegalSaga;