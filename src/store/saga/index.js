import { all } from "redux-saga/effects";

import englishStorySaga from './story.english.saga';
import hindiStorySaga from './story.hindi.saga';
import englishNgoSaga from './ngo.english.saga';
import hindiNgoSaga from './ngo.hindi.saga';
import englishLegalSaga from './legal.english.saga';
import hindiLegalSaga from './legal.hindi.saga';

export default function* rootSaga(){
    yield all([
        englishStorySaga(),
        hindiStorySaga(),
        englishNgoSaga(),
        hindiNgoSaga(),
        englishLegalSaga(),
        hindiLegalSaga(),
    ])
}