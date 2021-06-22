import { call, put, takeLatest } from "redux-saga/effects";
import { StateApi } from "../../services/state.service";
import { getEnglishState, GET_ENGLISH_STATE } from "../action/state.actions";

function* fetchState(){
    try{
        const {data} = yield call(StateApi.getStateEng);
        yield put(getEnglishState.success(data))
    }catch(e){
        yield put(getEnglishState.failure(e))
    }
}


function* englishStateSaga(){
    yield takeLatest(GET_ENGLISH_STATE.REQUEST, fetchState);
}

export default englishStateSaga;