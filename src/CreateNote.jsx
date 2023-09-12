import React,{useState} from'react';
import './App.css';
import Button from '@mui/material-next/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote=(props)=>{
    const [note,setNote] = useState({
        title:"",
        content:"",
    });
    const inputEvent = (event)=>{
        const {name, value} = event.target;
        setNote((preData)=> ({
                ...preData,
                [name]:value,
            }));
    };
    const addEvent = ()=>{
        if (note.title.trim() === "" && note.content.trim() === "" ) {
            alert("Title & Content cannot be empty");
            return;
        }else if (note.content.trim() === "" ) {
            alert("Content cannot be empty");
            return;
        }else if (note.title.trim() === ""){
               alert("Title cannot be empty");
                return;
        }
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };
    return (
    <>
        <div className='main_note'>
            <form>
                <input type='text'
                        name = "title"
                        value={note.title}
                         onChange={inputEvent}
                          placeholder="Title"
                           autoComplete='off'
                           style={{ maxWidth: '90%', minWidth: '70px' }}
                />
                <textarea
                            name='content' 
                            rows="" 
                            column=""
                            value={note.content}
                            onChange={inputEvent}
                            placeholder='write a note . . .'
                ></textarea>
                <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                </Button>
            </form>
        </div>
    </>
  )
}

export default CreateNote;