import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

function Header() {

  return (
    <header className="header">
      <Link to="/hacker-news" className="header__logo"></Link>
    </header>
  )
}

export default Header