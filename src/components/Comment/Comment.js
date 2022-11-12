import React from "react";
import { useLocation } from "react-router-dom";
import api from "../../utils/api";
import { convertTimestamp } from "../../utils/convertTimestamp";

import './Comment.css';

function Comment(props) {

  const [comment, setComment] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if(location.pathname.split(`/hacker-news/`).length > 1) {
      api.getCommentById(props.id)
      .then((data) => {
        setComment(data)
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      setComment(null)
    }

  }, [props.id, location.pathname]);

  return (
    <>
      {
        comment && (
          <li className="comments__container">
            <p className="comments__author">{comment.by}</p>
            {
              !comment.dead && !comment.deleted ? (
                <div className="comments__text" dangerouslySetInnerHTML={{__html:comment.text}} />
              ) : (
                <p className="comments__text" > Комментарий удален!</p>
              )
            }
            <p className="comments__data">{convertTimestamp(comment.time)}</p>

            {
              comment.kids && (
                <ul className="comments__list">
                  {
                    comment.kids.map((id) => (
                      <Comment id={id} key={id} />
                    ))
                  }
                </ul>
              )
            }
          </li>
        )
      }
    </>
  )
}

export default Comment