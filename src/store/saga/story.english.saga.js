import { call, put, takeLatest } from "redux-saga/effects";
import { StoryApi } from "../../services/story.service";
import { GET_ENGLISH_STORIES,getEnglishStories } from "../action/story.actions";

function* fetchStories(){
    try{
        const {data} = yield call(StoryApi.getStoriesEng);
        yield put(getEnglishStories.success(data))
    }catch(e){
        yield put(getEnglishStories.failure(e))
    }
}


function* englishStorySaga(){
    yield takeLatest(GET_ENGLISH_STORIES.REQUEST, fetchStories);
}

export default englishStorySaga;