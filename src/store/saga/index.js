import { all } from "redux-saga/effects";

import englishStorySaga from './story.english.saga';
import hindiStorySaga from './story.hindi.saga';
import englishNgoSaga from './ngo.english.saga';
import hindiNgoSaga from './ngo.hindi.saga';
import englishLegalSaga from './legal.english.saga';
import hindiLegalSaga from './legal.hindi.saga';
import storyCategorySaga from './category.story.saga';
import legalCategorySaga from './category.legal.saga'
import englishStatesSaga from './states.english.saga';
import hindiStatesSaga from './states.hindi.saga';
import profilePicSaga from './profilePic.saga'
import mailingListSaga from './mailingList.saga';
import usersSaga from './users.saga.js'
import configSaga from './config.saga';

export default function* rootSaga(){
    yield all([
        englishStorySaga(),
        hindiStorySaga(),
        englishNgoSaga(),
        hindiNgoSaga(),
        englishLegalSaga(),
        hindiLegalSaga(),
        legalCategorySaga(),
        storyCategorySaga(),
        englishStatesSaga(),
        hindiStatesSaga(),
        profilePicSaga(),
        mailingListSaga(),
        usersSaga(),
        configSaga(),
    ])
}