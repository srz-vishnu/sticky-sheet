import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Note from './Components/Note'
//import Addnote from './Components/Addnote'
function App() {
  return (
    <Provider store={store}>
    <div className="App">

      
    {/* <Note/>
    <NotesList/> */}

    <Note />
    {/* <Addnote /> */}
     
    </div>
    </Provider>
  );
}

export default App;
