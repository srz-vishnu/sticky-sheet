import { combineReducers } from "redux";
import noteReducer from "./Note/noteReducer";

const rootReducer = combineReducers({
  noteInfo: noteReducer,
})

export default rootReducer