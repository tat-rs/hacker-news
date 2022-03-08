import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

function Header(props) {

  return (
    <>

      {props.isMenuOpen ? (
        
        <div className="header__container header__container_size_little">
          <nav className="header__navbar navbar">
            <ul className="navbar__list">
              <li className="navbar_item link">new</li>
              <li className="navbar_item link">past</li>
              <li className="navbar_item link">comments</li>
              <li className="navbar_item link">ask</li>
              <li className="navbar_item link">show</li>
              <li className="navbar_item link">jobs</li>
              <li className="navbar_item link">submit</li>
            </ul>
          </nav>
          <a href="https://news.ycombinator.com/news" className="header__login">login</a>
        </div>
        )
      : (

    <header className="header">
      <Link to="/news" className="header__logo">
      </Link>
      <div className="header__container header__container_size_big">
        <nav className="header__navbar navbar">
          <ul className="navbar__list">
            <li className="navbar_item link">new</li>
            <li className="navbar_item link">past</li>
            <li className="navbar_item link">comments</li>
            <li className="navbar_item link">ask</li>
            <li className="navbar_item link">show</li>
            <li className="navbar_item link">jobs</li>
            <li className="navbar_item link">submit</li>
          </ul>
        </nav>
        <a href="https://news.ycombinator.com/news" className="header__login">login</a>
      </div>

    </header>
    )}
    </>
  )
}

export default Header