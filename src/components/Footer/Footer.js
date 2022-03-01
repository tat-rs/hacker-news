import React from "react";

import './Footer.css';

function Footer(props) {

  return (
    <footer className="footer">
      <p className="footer__text text">Applications are open for YC Summer 2022</p>
      <nav className="footer__navbar navbar">
        <ul className="navbar__list">
          <li className="navbar_item link">Guidelines</li>
          <li className="navbar_item link">FAQ</li>
          <li className="navbar_item link">Lists</li>
          <li className="navbar_item link">API</li>
          <li className="navbar_item link">Security</li>
          <li className="navbar_item link">Legal</li>
          <li className="navbar_item link">Apply to YC</li>
          <li className="navbar_item link">Contact</li>
        </ul>
      </nav>
      <form className="form">
        <p className="form__title text">Search:</p>
        <input className="form__input" name="search" type="text" placeholder="Write request"></input>
      </form>
    </footer>
  )
}

export default Footer