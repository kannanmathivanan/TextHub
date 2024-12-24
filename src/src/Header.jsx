import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const[menuOpen,setmenuOpen]=useState(false);

 return (
    <>
    <header>
        <h1>QutoesHub</h1>
        <div onClick={()=>setmenuOpen(!menuOpen)} className='menu-bar'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <div className='nav'>
        <nav className={menuOpen?"open":""}>
           <ul >
           <li><NavLink className='list' to="/" style={{color:"white"}}>Home</NavLink></li>
           <li ><NavLink className='list'to="addpost" style={{color:"white"}}>Add Post</NavLink></li>
           <li><NavLink className='list'to="about" style={{color:"white"}}>About Us</NavLink></li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header