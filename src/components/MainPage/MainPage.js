import React from "react";
import NewsItem from "../NewsItem/NewsItem";

import './MainPage.css';

function MainPage(props) {

  return (
    <main className="news">
      <ol className="news__list">
        
        {
          props.list.length > 0 && props.list.map((id) => (
            <NewsItem id={id} key={id} handleActiveItemClick={props.handleActiveItemClick}/>
          ))
        }

      </ol>
    </main>
  )
}

export default MainPage