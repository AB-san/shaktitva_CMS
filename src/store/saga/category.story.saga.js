import { call, put, takeLatest } from "redux-saga/effects";
import { CategoryApi } from "../../services/category.service";
import { getStoryCategory, GET_STORY_CATEGORY } from "../action/category.actions";

function* fetchCategory(){
    try{
        const {data} = yield call(CategoryApi.getStoryCategory);
        yield put(getStoryCategory.success(data))
    }catch(e){
        yield put(getStoryCategory.failure(e))
    }
}


function* storyCategorySaga(){
    yield takeLatest(GET_STORY_CATEGORY.REQUEST, fetchCategory);
}

export default storyCategorySaga;