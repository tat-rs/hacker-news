import React from "react";
import api from "../../utils/api";
import { convertTimestamp } from "../../utils/convertTimestamp";

import './Comment.css';

function Comment(props) {

  const [comment, setComment] = React.useState([]);

  React.useEffect(() => {
    api.getCommentById(props.id)
      .then((data) => {
        setComment(data)
      })
  }, []);

  const data = convertTimestamp(comment.time);

  return (
    <li>
      <p>{`by ${comment.by}:`}</p>
      <p>{comment.text}</p>
      <p>{data}</p>

      {
        comment.kids && (
          <ul>
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

export default Comment