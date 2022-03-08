import React from "react";

import './NavBar.css';

function NavBar() {

  return(
    <>
      <nav className="header__navbar navbar">
      <ul className='navbar__list'>
        <li className="navbar__item link">new</li>
        <li className="navbar__item link">past</li>
        <li className="navbar__item link">comments</li>
        <li className="navbar__item link">ask</li>
        <li className="navbar__item link">show</li>
        <li className="navbar__item link">jobs</li>
        <li className="navbar__item link">submit</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar