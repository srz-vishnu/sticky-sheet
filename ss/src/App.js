import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Note from './Components/Note'
//import Addnote from './Components/Addnote'
import UpdateContainer from './Components/UpdateContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <div className="App">

         
         <div>

         <Routes>

         <Route path = "/" element={ <Note/> } />
                <Route path = "/update" element={ <UpdateContainer /> } />
         </Routes>

         </div>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
