import { all } from "redux-saga/effects";

import storySaga from './story.saga';

export default function* rootSaga(){
    yield all([
        storySaga()
    ])
}