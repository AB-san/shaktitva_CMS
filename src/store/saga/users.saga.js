import { call, put, takeLatest } from "redux-saga/effects";
import { UsersApi } from "../../services/users.service";
import { getUsers, GET_USERS } from "../action/users.actions";

function* fetchUsers(){
    try{
        const {data} = yield call(UsersApi.getUsers);
        yield put(getUsers.success(data))
    }catch(e){
        yield put(getUsers.failure(e))
    }
}

function* UsersSaga(){
    yield takeLatest(GET_USERS.REQUEST, fetchUsers);
}

export default UsersSaga; 