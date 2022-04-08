import { MdDeleteForever } from 'react-icons/md';

//npx json-server --watch src/db.json --port 8000


function Note (props) {
  //const {id, text,date } = props.user;
 
  return (
    
               
        <div className='note'>
          {/* <h1>Sticky Sheet</h1> */}
          <span>hello</span>
          <div className='note-footer'>
            <small>07/04/2022</small>
            {/* <button id="read"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                              </svg> </button>  */}
            <MdDeleteForever className='delete-icon'
              size='1.3em'
            /> 
                {/* <div>
                  {props.user.map(function(item, idx){
                                return (
                                  <p>
                                          User Id: {item.id}<br/>
                                          text: {item.text} <br/>
                                          date: {item.date} <br/>
                                  </p>
                </div>       */}
          </div>
        </div>
      );
    };

export default Note;

                                          
                                        
                                       
