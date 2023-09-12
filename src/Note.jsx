import React from'react';
import './App.css';
import Button from '@mui/material-next/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const Note=(props)=>{

  const deleteNote = ()=>{
   props.deleteItem(props.id);
  }
  return (
    <>
        <div className='note'>
            <h1> Title : { props.title}</h1>
            <br/>
             <p>This is the content : { props.content}</p>
            <Button className="btn" onClick={deleteNote} >
                <RemoveCircleOutlineIcon className='deleteIcon'/>
            </Button>
        </div>
    </>
  )
}
export default Note;