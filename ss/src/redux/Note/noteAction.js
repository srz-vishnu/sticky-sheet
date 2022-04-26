export const getNoteInfo = () => {
    return {
      type: "GET_NOTE_INFO",
    }
  }


  export const postNoteInfo = (note) => {
    return{
        type: "POST_NOTE_INFO",
        payload: note,
    }
  }
  
  export const delNoteInfo  = (note) => {
    return{
        type: "DEL_NOTE_INFO",
        payload: note,
    }
  }

  export const updNoteInfo  = (note) => {
    return{
        type: "UPD_NOTE_INFO",
        payload: note,
    }
  }


