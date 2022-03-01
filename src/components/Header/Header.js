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
          <li className="navbar_item">new</li>
          <li className="navbar_item">past</li>
          <li className="navbar_item">comments</li>
          <li className="navbar_item">ask</li>
          <li className="navbar_item">show</li>
          <li className="navbar_item">jobs</li>
          <li className="navbar_item">submit</li>
        </ul>
      </nav>
      <a href="https://news.ycombinator.com/news" className="header__login">login</a>
    </header>
    </>
  )
}

export default Header