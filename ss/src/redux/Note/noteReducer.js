const initialState = {
    note: [],
  }
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_NOTE_INFO_SUCCESS": return {
        ...state,
        note: action.noteInfo
      }

      case "POST_NOTE_INFO_SUCCESS": return{
        ...state,
        note:[...state.note, action.noteInfo]
    }
  
      default: return state
    }
  }
  export default noteReducer