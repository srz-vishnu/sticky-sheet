import React from 'react'
import { connect } from 'react-redux'
import {postNoteInfo} from '../redux/Note/noteAction';
import { useState } from 'react';
import { MdDeleteForever, MdSave } from 'react-icons/md';
//import { useNavigate } from 'react-router-dom';
//import './postt.css'


function Addnote (props) {
    
  const {id, text,date,username} = props.note;
   var tdate;
   var today = new Date()
   tdate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  const saving =() =>{
    console.log("todffay",tdate)
    if (noteText.trim().length > 0) {
        props.postNoteInfo()
        setNoteText('');
    }
  }

  const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};


    return (
        <div>
            
            
            <h2>New Note</h2><br/>
            <div className='note new'>
                <span><textarea id="snote"
                rows='8'
				cols='20'
				placeholder='Type to add a note...'
                    value={noteText}
				onChange={handleChange}>
                    </textarea></span>
                <div className='note-footer'>
                        
                        <small>{characterLimit - noteText.length} Remaining
                        <input type="text" className='inptype' value={tdate} id="adddate"></input></small>
                        <button id="sav.btn" onClick={saving}>save</button>
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