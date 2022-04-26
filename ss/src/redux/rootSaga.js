import { all } from "redux-saga/effects";
import {watchNoteContainer} from './Note/noteSaga'
import { watchUserContainer } from "./User/userSaga";

 export function * rootSaga(){
    yield all(
        [watchNoteContainer(),watchUserContainer(),]
    )
}