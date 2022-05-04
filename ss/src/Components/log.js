import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z][A-Za-z0-9 ]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z][A-Za-z0-9 ]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);






//sign

// import React from 'react'
// import { connect } from 'react-redux'
// import {postUserInfo} from '../redux/User/userAction';
// import { useNavigate } from 'react-router-dom';


// function Signup(props) {

//     const {id,username,email,password } =props.user
//     let navigate = useNavigate()
//     const Register= () => {
//         props.postUserInfo()
//         navigate('/login')
//     }

// return(

    
//     <div className="log1">
//     <div className="log">
         
//         <label>email id:</label>
//         <input type="text" id="email"></input><br/>
//         <label>username:</label>
//         <input type="text" id="username"></input><br/>
//         <label>Password:</label>
//         <input type="text" id="password"></input><br/>

//         <button onClick={Register}>Register</button>

//       </div>
//     </div>
// )
// }

// const mapStateToProps = state => {
//     return{
//         user: state.userInfo.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         postUserInfo : () => { 

//             const user = {
//                 username: document.getElementById('username').value,
//                 email: document.getElementById("email").value,
//                 password: document.getElementById("password").value
                
//             };

//             dispatch(postUserInfo(user))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Signup)



