import React  from'react';
import './App.css';
import logo from "./logo/favicon.ico";

const Header=()=>{
  return (
    <>
        <div className='header'>
            <img src={logo} width="60" height="50" alt=''/>
            <h1> React Project</h1> 
        </div>
    </>
  )
}

export default Header;