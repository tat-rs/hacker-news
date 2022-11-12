import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../Loader/Loader";

import './MainPage.css';

function MainPage(props) {

  return (
    <section className="content__main-page">
      <h1 className="content__title">100 new stories</h1>
      {
        props.isLoading ? (
          <Loader />
        ) : (
          <>
            <ol className="content__list">
        
              {
                props.list.length > 0 && props.list.map((news) => (
                  <li className="content__item story" id={news.id} key={news.id}>
                    <NewsItem
                      news={news}
                      handleActiveItemClick={props.handleActiveItemClick}
                      />
                  </li>
                ))
              }

            </ol>
            {
              props.countNews < 100 && (
                <button className="content__btn" type="button" onClick={props.moreNews} >Еще</button>
              )
            }
          </>
        )
      }
    </section>
  )
}

export default MainPage