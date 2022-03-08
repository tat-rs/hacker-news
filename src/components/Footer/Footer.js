import React from "react";
import NavBar from "../NavBar/NavBar";

import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__text text">Applications are open for YC Summer 2022</p>
      <NavBar class='footer__navbar'/>
      <form className="form">
        <p className="form__title text">Search:</p>
        <input className="form__input" name="search" type="text" placeholder="Write request"></input>
      </form>
    </footer>
  )
}

export default Footer