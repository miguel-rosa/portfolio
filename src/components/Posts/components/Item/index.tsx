import React, { FC } from "react";
import "./style.css"

type ItemProps = {
  background: string;
  title: string;
  onClick?:React.MouseEventHandler;
}

const Item:FC<ItemProps> = ({background, title, onClick}) => {
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