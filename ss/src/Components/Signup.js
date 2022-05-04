import React from 'react'
import { connect } from 'react-redux'
import {postUserInfo} from '../redux/User/userAction';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


function Signup(props) {
    const {id,username,email,password } =props.user
        let navigate = useNavigate()
    const{
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
     props.postUserInfo()
     navigate('/login')
  }

    // let navigate = useNavigate()
    // const Register= () => {
    //     props.postUserInfo()
    //     navigate('/login')
    // }

return(

    
    <div className="log1">
    <div className="log">

         <label>username:</label>
        <input type="text" id="username" {...register("username", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z][A-Za-z0-9 ]+$/i
        })}
      />
      {errors?.username?.type === "required" && <p>This field is required</p>}
      {errors?.username?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.username?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}



        <label>email id:</label>
        <input type="email" id="email"></input><br/>
        <label>Password:</label>
        <input type="text" id="password"></input><br/>

        <button onClick={handleSubmit(onSubmit)}>Register</button>
        
        {/* onSubmit={handleSubmit(onSubmit)} */}

      </div>
    </div>
);
}

// export default Signup;

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
