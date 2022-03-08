import React from "react";
import api from "../../utils/api";
import { convertTimestamp } from "../../utils/convertTimestamp";

import './Comment.css';

function Comment(props) {

  const [comment, setComment] = React.useState(null);

  React.useEffect(() => {
    api.getCommentById(props.id)
      .then((data) => {
        /* !data.dead && !data.deleted &&  */setComment(data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [props.id]);

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
                      <Comment id={id} key={id}/>
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