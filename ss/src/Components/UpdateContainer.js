
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';
import { updNoteInfo } from '../redux/Note/noteAction';


function UpdateContainer (props) {

    const updateNote=useLocation()
    const {note} =updateNote.state
    let navigate = useNavigate();
    
   var tdate;
   var today = new Date()
   tdate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();


    const [udata,setUpdate]=useState({
        text:note.text,
        date:note.date,
        id:note.id,
        username:note.username
    })
    
    const handleSubmit=() =>{
        props.updNoteInfo(udata)
        navigate('/')        
    }
    const handleC=(e)=>{
        const name=e.target.name //textarea name ,name is used in here
        setUpdate
        (
            {
                ...udata,
                [name]:e.target.value,
                ["date"]:tdate
            }
        )
        
    }

    return(
        <div>

            <h1>Update Note</h1>
            {/* <span>
                <div>
                    <textarea name="text" value={udata.text} onChange={handleC}></textarea>
                    <button id="write" onClick={handleSubmit}>Update Note</button>
                </div>
             </span> */}


               <div className='note'>
                    <span ><textarea name="text" value={udata.text} rows='8'cols='20' onChange={handleC}></textarea></span>
                            <div className='note-footer'>

                            <button id="write" onClick={handleSubmit}>Update Note</button>
                           
                            </div>
                 </div>
        </div>     
    )

}

const mapStateToProps=(state)=>
{
    return{
        note: state.noteInfo.note
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updNoteInfo: (udata)=>dispatch(updNoteInfo(udata)),
    }   
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateContainer)               