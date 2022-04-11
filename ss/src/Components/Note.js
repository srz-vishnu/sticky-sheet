import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNoteInfo,delNoteInfo } from '../redux/Note/noteAction'
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
      
      
     { /* <button id="read" onClick={props.getNoteInfo}>Click me to get Note info</button> */ }
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
                                            <span className='spn'>{item.text}</span>
                                                  <div className='note-footer'>
                                                    <small>{item.date}</small>
                                                    {/* <MdDeleteForever className='delete-icon' size='1.3em'  /> */}

                                                    <button id="read"  onClick={props.delNoteInfo.bind(this, item.id)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                              </svg></button>
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
    delNoteInfo : (note) => dispatch(delNoteInfo(note))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
