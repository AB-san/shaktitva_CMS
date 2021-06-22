import { call, put, takeLatest } from "redux-saga/effects";
import { StateApi } from "../../services/state.service";
import { getHindiState, GET_HINDI_STATE } from "../action/state.actions";

function* fetchState(){
    try{
        const {data} = yield call(StateApi.getStateHin);
        yield put(getHindiState.success(data))
    }catch(e){
        yield put(getHindiState.failure(e))
    }
}


function* hindiStateSaga(){
    yield takeLatest(GET_HINDI_STATE.REQUEST, fetchState);
}

export default hindiStateSaga;