import React from "react";

const Post = props => (
  <div>
    <p>{props.body}</p>
    <p>~ {props.username}</p>
  </div>
);

export default Post;
