import React from "react";
import { useHistory } from "react-router-dom";
import { convertTimestamp } from "../../utils/convertTimestamp";

import Comment from "../Comment/Comment";

import './NewsPage.css';

function NewsPage(props) {

  const data = convertTimestamp(props.list.time);
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <section className="story">
      {/* <h2 className="story__title">{props.list.title}</h2>
        <p className="story__info">{`Автор: ${props.list.by}`}</p>
        <p className="story__info">{`Дата: ${data}`}</p> */}
        <h2 className="story__title">{props.list.title}</h2>
        <a href={props.list.url}>{props.list.url}</a>
      <div className="story__container">
        <p className="story__info">{`by ${props.list.by}`}</p>
        <p className="story__info">{data}</p>
      </div>
      <button type='button' onClick={goBack}>Вернуться к списку новостей</button>

        {
          props.list.kids ? 
          (<>
            <p>{`Комментарии: ${props.list.kids.length}`}</p>
            <ul>
              {
                props.list.kids.map((id) => (
                  <Comment id={id} key={id}/>
                ))
              }
            </ul>
          </>) : (
            <p>Пока нет комментариев</p>
          )
        }
    </section>
  )
}

export default NewsPage