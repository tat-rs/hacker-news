import React from "react";
import { useHistory } from 'react-router-dom';

import api from "../../utils/api";
import { convertTimestamp } from "../../utils/convertTimestamp";

import './NewsItem.css';

function NewsItem(props) {

  const [news, setNews] = React.useState(null);

  React.useEffect(() => {

    api.getStory(props.id)
        .then((data) => {
          data && setNews(data)
        })
  }, []);

  const data = news && convertTimestamp(news.time);

  function handleActiveItemClick() {
    props.handleActiveItemClick(news)
  }

  return (
    <>

    {
      news && (
        <li className="news__item story" onClick={handleActiveItemClick}>
          <h2 className="story__title">{news.title}</h2>
          <div className="story__container">
            <p className="story__info">{`${news.score} points`}</p>
            <p className="story__info">{`by ${news.by}`}</p>
            <p className="story__info">{data}</p>
            {
              news.kids && (
                <p className="story__info">КОММЕНТАРИИ: {news.kids.length}</p>
              )
            }
          </div>
        </li>
      )
    }
    </>

  )
}

export default NewsItem