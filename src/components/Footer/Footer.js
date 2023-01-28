import React from "react";

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text text">&#169;{currentYear}</p>
    </footer>
  )
}

export default Footer