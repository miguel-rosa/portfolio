import React, {useState} from "react";
import "./style.css";
const Posts = ({
  content
}) => {

  const [selectedContent, setSelectedContent] = useState(0);
  
  return (
    <>
    <nav>
      {content.map(({title}, index) => (
        <button
          key={index}
          onClick={() => setSelectedContent(index)}>
          {title}
        </button>
      ))}
    </nav>
    <section className="posts">
      {
        content[selectedContent].posts.map(({
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
    </>
  )
};

export default Posts;