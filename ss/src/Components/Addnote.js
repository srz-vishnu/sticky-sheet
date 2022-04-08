import React from 'react'
import { connect } from 'react-redux'
import {postNoteInfo} from '../redux/Note/noteAction';
import { MdDeleteForever, MdSave } from 'react-icons/md';
//import { useNavigate } from 'react-router-dom';
//import './postt.css'


function Addnote (props) {
    
  const {id, text,date} = props.note;
   var tdate;
  const saving =() =>{

    var today = new Date()
    tdate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    console.log("todffay",tdate)
     
    props.postNoteInfo()
  }

    return (
        <div>
            
            
            <h2>add note content</h2><br/>
            <div className='note'>
                <span><textarea id="snote"
                rows='8'
				cols='20'
				placeholder='Type to add a note...'>
                    </textarea></span>
                <div className='note-footer'>
                        <small><input type="text" value={tdate} id="adddate"></input></small>
                        <button id="sav.btn" onClick={saving}>btn</button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        note: state.noteInfo.note
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postNoteInfo : () => {

            const note = {
                text: document.getElementById('snote').value,
                date: document.getElementById("adddate").value,
                username: "vk",
            };

            dispatch(postNoteInfo(note))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Addnote)