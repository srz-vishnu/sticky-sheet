import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNoteInfo } from '../redux/Note/noteAction'
import { MdDeleteForever } from 'react-icons/md';
import Addnote from './Addnote';
//import { delNoteInfo } from '../redux/Note/noteActions'
//import { Link } from 'react-router-dom'
//import './geet.css'

//npx json-server --watch src/db.json --port 8000


function Note (props) {
  const {id, text,date,email } = props.note;
 useEffect(() => {

props.getNoteInfo() 
},[]); //helps to dsply data when app runs (useeffect)
  return (
    <div>
      <h1>Users Information </h1>
      
     { /* <button id="read" onClick={props.getUserInfo}>Click me to get User info</button> */ }
                      {/* <table>
                           <thead>
                             <tr>
                               <th>text</th>
                               <th>date</th>
                               </tr>
                           </thead> */}
                                                           
                            {props.note.map(function(item, idx){
                                return (
                                        // <tbody>
                                        //     <td>{item.text}</td>
                                        //     <td>{item.date}</td>
                                        // </tbody>
                                        <div className='note'>
                                            <span>{item.text}</span>
                                            <div className='note-footer'>
                                                    <small>{item.date}</small>
                                                    <MdDeleteForever className='delete-icon' size='1.3em'  />
                                            </div>
                                        </div>

                            )})}
                       {/* </table> */}
                       <Addnote />
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    note: state.noteInfo.note
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNoteInfo: () => dispatch(getNoteInfo()), 
    // delNoteInfo : (note) => dispatch(delNoteInfo(note))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
