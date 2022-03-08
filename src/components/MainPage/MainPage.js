import React from "react";
import NewsItem from "../NewsItem/NewsItem";

import './MainPage.css';

function MainPage(props) {

  return (

    <ol className="content__list">
        
      {
        props.list.length > 0 && props.list.map((id) => (
          <li className="content__item story" id={id} key={id}>
            <NewsItem id={id} handleActiveItemClick={props.handleActiveItemClick} />
          </li>
        ))
      }

    </ol>
  )
}

export default MainPage