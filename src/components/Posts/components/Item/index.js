import React from "react";
import "./style.css"

const Item = ({background, title, onClick}) => {
  return (
    <div
    style={{ backgroundImage: `url(${background})`}}
    className="post"
    onClick={onClick}
  >
    <h3 className="title">
      {title}
    </h3>
  </div>
  )
}

export default Item;