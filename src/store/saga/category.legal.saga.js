import { call, put, takeLatest } from "redux-saga/effects";
import { CategoryApi } from "../../services/category.service";
import { getLegalCategory, GET_LEGAL_CATEGORY } from "../action/category.actions";

function* fetchCategory(){
    try{
        const {data} = yield call(CategoryApi.getLegalCategory);
        yield put(getLegalCategory.success(data))
    }catch(e){
        yield put(getLegalCategory.failure(e))
    }
}


function* legalCategorySaga(){
    yield takeLatest(GET_LEGAL_CATEGORY.REQUEST, fetchCategory);
}

export default legalCategorySaga;