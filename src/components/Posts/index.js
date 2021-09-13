import React from "react";
import "./style.css";
const Posts = ({
  posts
}) => {
  return (
    <section className="posts">
      {
        posts.map(({
          background,
          link,
          title
        }, index) => (
          <a
            key={index}
            style={{ backgroundImage: `url(${background})`}}
            className="post"
            href={link}
          >
            <h3 className="title">
              {title}
            </h3>
          </a>
        ))
      }
    </section>
  )
};

export default Posts;