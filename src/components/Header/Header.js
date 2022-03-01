import React from "react";

import './Header.css';

function Header(props) {

  return (
    <>
    <header className="header">
      <a href="https://news.ycombinator.com/news" className="header__logo">
      </a>
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
    </header>
    </>
  )
}

export default Header