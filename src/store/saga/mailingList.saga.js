import { call, put, takeLatest } from "redux-saga/effects";
import { MailingListApi } from "../../services/mailingList.service";
import { getMailingList,GET_MAILING_LIST } from "../action/mailingList.actions";

function* fetchMailingList(){
    try{
        const {data} = yield call(MailingListApi.getMailingList);
        yield put(getMailingList.success(data))
    }catch(e){
        yield put(getMailingList.failure(e))
    }
}

function* mailingListSaga(){
    yield takeLatest(GET_MAILING_LIST.REQUEST, fetchMailingList);
}

export default mailingListSaga; 