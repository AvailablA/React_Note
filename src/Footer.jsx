import React from'react';
import './App.css';


const Footer=()=>{

    const year = new Date().getFullYear();
  return (
    <>
      <div className='footer_container'>s
        <p>copyroght © {year}</p>
      </div>
        
    </>
  )
}

export default Footer;