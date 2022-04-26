import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Note from './Components/Note'
import Login from './Components/Login'
import Signup from './Components/Signup'
//import Addnote from './Components/Addnote'
import UpdateContainer from './Components/UpdateContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <div className="App">
       <header className="App-header">


         
         <div>

         <Routes>

         <Route path = "/" element={ <Note/> } />
                <Route path = "/update" element={ <UpdateContainer /> } />
                <Route path = "/login" element={ <Login /> } />
                <Route path = "/signup" element={ <Signup /> } />
         </Routes>

         </div>
         </header>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
