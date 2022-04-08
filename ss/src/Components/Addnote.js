// import React from 'react'
// import { connect } from 'react-redux'
// import postNoteInfo from '../redux/Note/noteActions';
// //import { useNavigate } from 'react-router-dom';
// //import './postt.css'


// function Addnote (props) {
    
//   const {id, text,date,email } = props.note;

// //   let navigate = useNavigate()

// //   const navi = () => {
// //     props.postNoteInfo()
// //     navigate('/')
// //   }

//     return (
//         <div>
            
                
//             <h2>add note content</h2><br/>
//             {/* <label className='adder'>Name : </label>
//             <input type="text" className='adder' id='name'/><br/>
//             <label className='adder'>Phone : </label>
//             <input type="phone" className='adder' id='phone'/><br/>
//      */}     <span>    </span>

//             {/* <label className='adder'>Email : </label>
//             <input type="email" className='adder' id='email'/><br/>

//             <button id="write" onClick={navi}>Add Note</button> */}
         
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return{
//         note: state.noteInfo.note
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         postNoteInfo : () => {

//             const note = {
//                 name: document.getElementById('name').value,
//                 phone: document.getElementById('phone').value,
//                 email: document.getElementById('email').value,
//             };

//             dispatch(postNoteInfo(note))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Addnote)