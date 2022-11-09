import React from "react";
import { Link, Route, useLocation } from 'react-router-dom';

import { convertTimestamp } from "../../utils/convertTimestamp";
import Comment from "../Comment/Comment";
import Loader from "../Loader/Loader";

import './NewsItem.css';

function NewsItem(props) {

  const location = useLocation();
  const data = props.news && convertTimestamp(props.news.time);

  function handleActiveItemClick() {
    props.handleActiveItemClick(props.news.id)
  }

  return (
    <>

    {
      props.news && (
        <div className="news">
          <h2 className="story__title" onClick={handleActiveItemClick}>{props.news.title}</h2>
          {
            props.selectedNews && props.selectedNews.url === props.news.url && (
              <>
                <p className="story__link">Подробнее на: <a className="story__link link" href={props.news.url} target="_blank" rel="noopener noreferrer">{props.news.url}</a></p>
              </>
            )
          }
          <div className="story__container">
            <p className="story__info">{`${props.news.score} points`}</p>
            <p className="story__info">{`by ${props.news.by}`}</p>
            <p className="story__info">comments: {props.news.descendants}</p>
            <p className="story__info">{data}</p>
          </div>
          <Route path='/hacker-news/:id'>
            
            <Link to='/hacker-news' className="story__link-back link">Вернуться к списку новостей</Link>

            {
            props.news.kids ? 
              (<div className="comments">
                <p className="comments__count">Комментарии: {props.news.descendants}</p>
                <ul className="comments__list">
                  {
                  props.news.kids.sort().map((id) => (
                     <Comment id={id} key={id} />
                    ))
                  }
                </ul>
              </div>) : (
                <p className="comments__count">Пока нет комментариев</p>
              )
            }
          </Route>
        </div>
      )
    }
    </>

  )
}

export default NewsItem