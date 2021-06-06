import { call, put, takeLatest } from "redux-saga/effects";
import { StoryApi } from "../../services/story.service";
import { GET_STORIES, getStories } from "../action/story.actions";

function* fetchStories(){
    try{
        const {data} = yield call(StoryApi.getStories);
        yield put(getStories.success(data))
    }catch(e){
        yield put(getStories.failure(e))
    }
}

function* storySaga(){
    yield takeLatest(GET_STORIES.REQUEST, fetchStories);
}

export default storySaga;