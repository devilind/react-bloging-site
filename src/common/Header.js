import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import logo from '../lottie/knowingly.png'
import './header.css'

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  const [searchKey , setSearchKey] = useState('')
  function handleHamburgerToggles() {
    let css1 = 'navbar-urls';
    if (isOpen) css1 = 'navbar-urls-open';
    return css1;
  }
  function handleChange(event) {
    setSearchKey(event.target.value)
  }
  function closeHamburger() {
    if (isOpen) setOpen(false);
    
  }
  return (
    <div className='custom-container'>
      <div className="custom-navbar">
        <div className='web-icon-menu'>
          <div className="website-icon">
          <Link to='/'>
            <img src={logo} width="200"></img>
            </Link>
          </div>
          <div className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className={handleHamburgerToggles()} >
        {/* // 'navbar-urls'> */}
          <div className="search-container">
            <div className="search-box">
            <input onChange={handleChange} value={searchKey} type="text" name="searchKey"  placeholder="Search..."></input></div>
            <Link to={`/blogs/?page=1&limit=5&searchKey=${searchKey}`} onClick={closeHamburger}><div className="search-icon fa fa-search"></div></Link>
          </div>
          <div className="url-anchors"> 
          {/* <div className="dropdown"> */}
            {/* <button className="dropbtn">Dropdown</button> */}
            <Link to='/blogs/?page=1&limit=5' onClick={closeHamburger}><span >Blog</span></Link>
            {/* <div className="dropdown-content">
              <NavLink to="/market"  onClick={closeHamburger}>Market</NavLink>
              <NavLink to="/coding"  onClick={closeHamburger}>Coding</NavLink>
              <NavLink to="/sports"  onClick={closeHamburger}>Sports</NavLink>
            </div>
          </div> */}
          <NavLink to='/about'  onClick={closeHamburger}><span >About</span></NavLink>
          <NavLink to='/contact'  onClick={closeHamburger}><span >Contact</span></NavLink>
        </div>
        </div>
      </div>
      {/* 
        </div> */}
    </div>

  )
}
