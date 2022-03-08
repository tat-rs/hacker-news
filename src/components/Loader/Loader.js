import React from "react";

import './Loader.css';

function Loader(props) {

  return (
    <div className="loader">
      {/* <div className="loader-img"></div> */}
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader