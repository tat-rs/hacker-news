import React from "react";
import { Link, Route } from 'react-router-dom';

import api from "../../utils/api";
import { convertTimestamp } from "../../utils/convertTimestamp";
import Comment from "../Comment/Comment";
import Loader from "../Loader/Loader";

import './NewsItem.css';

function NewsItem(props) {

  const [news, setNews] = React.useState(null);

  React.useEffect(() => {

    api.getStory(props.id)
        .then((data) => {
          data && setNews(data)
        })
        .catch((err) => {
          console.log(err)
        })
    
  }, [props.id]);

  const data = news && convertTimestamp(news.time);

  function handleActiveItemClick() {
    props.handleActiveItemClick(news)
  }

  return (
    <>

    {
      !news && <Loader />
    }

    {
      news && (
        <div className="news">
          <h2 className="story__title" onClick={handleActiveItemClick}>{news.title}</h2>
          {
            props.selectedNews && news.url && (
              <>
                <p className="story__link">Подробнее на: <a className="story__link link" href={news.url} target="_blank" rel="noopener noreferrer">{news.url}</a></p>
              </>
            )
          }
          <div className="story__container">
            <p className="story__info">{`${news.score} points`}</p>
            <p className="story__info">{`by ${news.by}`}</p>
            <p className="story__info">{data}</p>
          </div>
          <Route path='/hacker-news/:id'>
            
            <Link to='/hacker-news' className="story__link-back link">Вернуться к списку новостей</Link>

            {
              news.kids ? 
              (<div className="comments">
                <p className="comments__count">Комментарии: {news.kids.length}</p>
                <ul className="comments__list">
                  {
                  news.kids.sort().map((id) => (
                     <Comment id={id} key={id}/>
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