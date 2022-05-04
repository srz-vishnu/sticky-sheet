import React from "react";
import { Link } from "react-router-dom";

function Login() {
    
    const Userlogin = () => {

 }
    return(

      <div className="log1">
        <div className="log">
         
            <label>Email-id:</label>
            <input type="email" id="email"></input><br/>

            <label>Password:</label>
            <input type="text" id="pwd"></input><br/>
            
             <button onClick={"Userlogin"}>LOG-IN</button>
             <button><Link to='/signup'>Sign-Up</Link></button>

        </div>
     </div>
    )
}

export default Login