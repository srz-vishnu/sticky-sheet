import { all } from "redux-saga/effects";
import {watchNoteContainer} from './Note/noteSaga'

 export function * rootSaga(){
    yield all(
        [watchNoteContainer(),]
    )
}