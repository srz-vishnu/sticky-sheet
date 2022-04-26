import { useReducer } from "react";
import { combineReducers } from "redux";
import noteReducer from "./Note/noteReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  noteInfo: noteReducer,
  userInfo: userReducer,
})

export default rootReducer