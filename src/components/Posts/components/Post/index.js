import React from "react";
import "./style.css";

const Post = ({
  background,
  link,
  title
  }) => {
  return (
    <a
      style={{ backgroundImage: `url(${background})`}}
      className="post"
      href={link}
    >
      <h3 className="title">
        {title}
      </h3>
    </a>
  )
};

export default Post;