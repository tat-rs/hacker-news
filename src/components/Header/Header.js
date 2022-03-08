import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import NavBar from "../NavBar/NavBar";

import './Header.css';

function Header(props) {

  return (
    <>

      <header className="header">
      <Link to="/news" className="header__logo">
      </Link>
      <div className='header__container header__container_size_big'>
        <NavBar class='header__container_size_big'/>
        <a href="https://news.ycombinator.com/news" className="header__login">login</a>
      </div>

        <HamburgerButton handleMenuClick={props.handleMenuClick} isMenuOpen={props.isMenuOpen}/>

    </header>

    {props.isMenuOpen && (
      <div className='header__container header__container_size_little'>
        <NavBar />
        <a href="https://news.ycombinator.com/news" className="header__login">login</a>
      </div>

      )}
    </>
  )
}

export default Header