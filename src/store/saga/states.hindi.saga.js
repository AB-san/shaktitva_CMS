import { call, put, takeLatest } from "redux-saga/effects";
import { StatesApi } from "../../services/states.service";
import { getHindiStates, GET_HINDI_STATES } from "../action/states.actions";

function* fetchStates(){
    try{
        const {data} = yield call(StatesApi.getStatesHin);
        yield put(getHindiStates.success(data))
    }catch(e){
        yield put(getHindiStates.failure(e))
    }
}


function* hindiStatesSaga(){
    yield takeLatest(GET_HINDI_STATES.REQUEST, fetchStates);
}

export default hindiStatesSaga;