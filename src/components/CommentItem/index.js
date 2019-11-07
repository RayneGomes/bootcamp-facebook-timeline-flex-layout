import React from 'react';

import './style.css';

function CommentItem({ data }) {
  return (
    <div className="comment">
      <div className="avatar-comment">
        <img src={data.author.avatar} className="avatar" alt="avatar"/>
      </div>
      <div className="comment-content">
        <p className="title">
          {data.author.name}
        </p>
        <small className="date">{data.date}</small>
        <div className="text-comment">
          {data.content}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;