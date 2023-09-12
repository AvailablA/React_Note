import React, { useState } from'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{
  const [addItem,setAddItem] = useState([]);  
  const addNote = (note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note]
    });
    console.log(note)
  };
  const onDelete =(id)=>{
    setAddItem((olddata) =>{
        return olddata.filter((curdata,indx)=>{
          return indx !== id;
        })
      })
    }
  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      <div className='note-container'>
        {addItem.map((val,ind)=>{
          return (<Note
                  index={ind}
                  id={ind}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}/>
          );
        })}
      </div>
      <Footer/>     
    </>
  )
}
export default App;
