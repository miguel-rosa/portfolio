import React from "react";
import Post from "./components/Post";
import "./style.css";
const Posts = ({
  posts
}) => {
  return posts?.length && (
    <section className="posts">
      {
        posts.map((post, index) => {
          return(
            <Post 
              background={post.urlToImage}
              title={post.description}
              link={post.url}
              key={index}
            />
          )
        })
      }
    </section>
  )
};

export default Posts;