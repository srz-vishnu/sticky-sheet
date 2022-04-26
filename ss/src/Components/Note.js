import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNoteInfo,delNoteInfo} from '../redux/Note/noteAction'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md';
import Addnote from './Addnote';
//import { delNoteInfo } from '../redux/Note/noteActions'
//import { Link } from 'react-router-dom'

//npx json-server --watch src/db.json --port 8000


function Note (props) {
  const {id, text,date,username } = props.note;
 useEffect(() => {

props.getNoteInfo() 
},[]); //helps to dsply data when app runs (useeffect)
  return (
    <div>
                        
                            {props.note.map(function(item, idx){
                                return (
                                   <div style={{display:'inline-block'}}>
                                        
                                        <div className='note'>
                                            <span className='spn'>{item.text}</span>
                                            {/* <span className='spn'>{item.text}</span> */}
                                                  <div className='note-footer'>
                                                    <small>{item.date}</small>


                                              {/* <button id="read"> <Link to='/update' state={{note:item}}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg></Link> </button> */}

                                              <button id="read"> <Link to='/update' state={{note:item}}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                              </svg></Link></button>

                                                    <button id="read"  onClick={props.delNoteInfo.bind(this, item.id)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                              </svg></button>
                                            </div>
                                        </div>
                                    </div>
                            )})}
                       
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
