import { call, put, takeLatest } from "redux-saga/effects";
import { StoryApi } from "../../services/story.service";
import { GET_HINDI_STORIES,getHindiStories } from "../action/story.actions";

function* fetchStories(){
    try{
        const {data} = yield call(StoryApi.getStoriesHin);
        yield put(getHindiStories.success(data))
    }catch(e){
        yield put(getHindiStories.failure(e))
    }
}


function* hindiStorySaga(){
    yield takeLatest(GET_HINDI_STORIES.REQUEST, fetchStories);
}

export default hindiStorySaga;