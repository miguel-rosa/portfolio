import React, {useState} from "react";
import Link from "./components/Link";
import Popup from "./components/Popup";
import "./style.css";
const Posts = ({
  content
}) => {

  const [selectedContent, setSelectedContent] = useState(0);
  
  return (
    <>
    <nav className="tabs">
      {content.map(({title}, index) => (
        <button
          key={index}
          onClick={() => setSelectedContent(index)}
          className={`tab ${index === selectedContent ? "tab--active" : "tab--inactive"}`}
        >
          {title}
        </button>
      ))}
    </nav>
    <section className="posts">
      {
        content[selectedContent].posts.map(({
          background,
          link,
          title,
          type='link',
          popup,
        }, index) => {
          
          if(type === 'popup') return <Popup subtitle={content[selectedContent].title} key={index} background={background} title={title} popup={popup}/>
          
           return <Link key={index} background={background} link={link} title={title} />
        })
      }
    </section>
    </>
  )
};

export default Posts;