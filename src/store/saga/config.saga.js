import { call, put, takeLatest } from "redux-saga/effects";
import { ConfigApi } from "../../services/config.service";
import { getConfig, GET_CONFIG } from "../action/config.actions";

function* fetchConfig(){
    try{
        const {data} = yield call(ConfigApi.getConfig);
        yield put(getConfig.success(data))
    }catch(e){
        yield put(getConfig.failure(e))
    }
}

function* ConfigSaga(){
    yield takeLatest(GET_CONFIG.REQUEST, fetchConfig);
}

export default ConfigSaga; 