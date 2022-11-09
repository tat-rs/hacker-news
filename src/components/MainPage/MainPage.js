import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../Loader/Loader";

import './MainPage.css';

function MainPage(props) {

  if(props.isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <section className="content__main-page">
      <h1 className="content__title">100 new stories</h1>
      <ol className="content__list">
        
      {
        props.list.length > 0 && props.list.map((news) => (
          <li className="content__item story" id={news.id} key={news.id}>
            <NewsItem news={news} handleActiveItemClick={props.handleActiveItemClick} />
          </li>
        ))
      }

      </ol>
    </section>
  )
}

export default MainPage