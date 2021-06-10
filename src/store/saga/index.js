import { all } from "redux-saga/effects";

import englishStorySaga from './story.english.saga';
import hindiStorySaga from './story.hindi.saga';

export default function* rootSaga(){
    yield all([
        englishStorySaga(),
        hindiStorySaga()
    ])
}