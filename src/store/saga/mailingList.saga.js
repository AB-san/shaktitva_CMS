import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { MailingListApi } from "../../services/mailingList.service";
import { getMailingList,GET_MAILING_LIST,deleteEmail,DELETE_MAILING_LIST } from "../action/mailingList.actions";

function* fetchMailingList(){
    try{
        const {data} = yield call(MailingListApi.getMailingList);
        yield put(getMailingList.success(data))
    }catch(e){
        yield put(getMailingList.failure(e))
    }
}

function* removeEmail(action){
    try{
        const {data} = yield call(MailingListApi.deleteEmail,action.payload);
        yield put(deleteEmail.success(data))
    }catch(e){
        yield put(deleteEmail.failure(e))
    }
}


function* mailingListSaga(){
    yield takeLatest(GET_MAILING_LIST.REQUEST, fetchMailingList);
    yield takeEvery(DELETE_MAILING_LIST.REQUEST, removeEmail);
}

export default mailingListSaga; 