
import {put, takeEvery, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import axios from 'axios'

// function that makes the api request and returns a Promise for response
function fetchNoteData() {
    return axios({
      method: "get",
      url: "http://localhost:8000/notes"
    });
  }

function* getNoteSaga(){
    console.log("...saga")
    //  yield delay(4000)
    const response = yield call(fetchNoteData);
    console.log("...saga",response.data);
    yield put({type :"GET_NOTE_INFO_SUCCESS", noteInfo : response.data }  )
}


//post code added to get code

function* postNoteSaga (action) {
  try{
      const udata = action.payload;
      const res = yield call(axios.post,"http://localhost:8000/notes",udata);      
      console.log("output", res)
      yield put({type:"POST_NOTE_INFO_SUCCESS",noteInfo : res.data});
    }
    catch (e) { console.log('error',e) }
}

function* delNoteSaga (action) {
  try{
      const udata = action.payload;
      const res = yield call(axios.delete,"http://localhost:8000/notes/"+udata);      
      console.log("output", res)
      yield put({type:"GET_NOTE_INFO"});
    }
    catch (e) { console.log('error',e) }
}


export function* watchNoteContainer(){
    yield takeEvery("GET_NOTE_INFO",getNoteSaga)
     yield takeEvery("POST_NOTE_INFO", postNoteSaga)
     yield takeEvery("DEL_NOTE_INFO",delNoteSaga)

}
