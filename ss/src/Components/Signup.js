import React from 'react'
import { connect } from 'react-redux'
import {postUserInfo} from '../redux/User/userAction';
import { useNavigate } from 'react-router-dom';





function Signup(props) {

    const {id,username,email,password } =props.user
    let navigate = useNavigate()
    const Register= () => {
        props.postUserInfo()
        navigate('/login')
    }

return(

    
    <div className="log1">
    <div className="log">
         


        <label>email id:</label>
        <input type="text" id="email"></input><br/>
        <label>username:</label>
        <input type="text" id="username"></input><br/>
        <label>Password:</label>
        <input type="text" id="password"></input><br/>

        <button onClick={Register}>Register</button>

      </div>
    </div>
)

}

const mapStateToProps = state => {
    return{
        user: state.userInfo.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postUserInfo : () => { 

            const user = {
                username: document.getElementById('username').value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
                
            };

            dispatch(postUserInfo(user))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)