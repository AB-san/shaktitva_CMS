import { call, put, takeLatest } from "redux-saga/effects";
import { StatesApi } from "../../services/states.service";
import { getEnglishStates, GET_ENGLISH_STATES } from "../action/states.actions";

function* fetchStates(){
    try{
        const {data} = yield call(StatesApi.getStatesEng);
        yield put(getEnglishStates.success(data))
    }catch(e){
        yield put(getEnglishStates.failure(e))
    }
}


function* englishStatesSaga(){
    yield takeLatest(GET_ENGLISH_STATES.REQUEST, fetchStates);
}

export default englishStatesSaga;