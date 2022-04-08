export const getNoteInfo = () => {
    return {
      type: "GET_NOTE_INFO",
    }
  }


  const postNoteInfo = (note) => {
    return{
        type: "POST_NOTE_INFO",
        payload: note,
    }
  }
  