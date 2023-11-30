import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import './header.css'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  function handleHamburgerToggles() {
    let css1 = 'navbar-urls';
    if (isOpen) css1 = 'navbar-urls-open';
    console.log(css1)
    return css1;
  }
  
  function closeHamburger() {
    if (isOpen) setOpen(false);
   
  }
  return (
    <div className='container'>
      <div className="custom-navbar">
        <div class='web-icon-menu'>
          <div className="website-icon">
          <Link to='/'>
            <img src="knowingly.png" width="200"></img>
            </Link>
          </div>
          <div className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className={handleHamburgerToggles()} >
        {/* // 'navbar-urls'> */}
          <div className="search-container">
            <input type="text" className="search-box" placeholder="Search..."></input>
            <div className="search-icon fa fa-search"></div>
          </div>
          <div className="url-anchors"> 
          <div className="dropdown">
            {/* <button className="dropbtn">Dropdown</button> */}
            <NavLink to='/blog' onClick={closeHamburger}><span >Blog</span></NavLink>
            <div className="dropdown-content">
              <a href="/market"  onClick={closeHamburger}>Market</a>
              <a href="/coding"  onClick={closeHamburger}>Coding</a>
              <a href="/"  onClick={closeHamburger}>Sports</a>
            </div>
          </div>
          <NavLink to='/about'  onClick={closeHamburger}><span >About</span></NavLink>
          <NavLink to='/contact'  onClick={closeHamburger}><span >Contact Us</span></NavLink>
        </div>
        </div>
      </div>
      {/* 
        </div> */}
    </div>

  )
}
