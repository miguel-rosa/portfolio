import React from 'react';
import Item from '../Item';
import "./style.css"

const Link = ({background, title, link}) => {
  return (
    <a
    target="_blank"
    rel="noreferrer"
    className="link-wrapper"
    href={link}
  >
    <Item background={background} title={title}/>
  </a>
  )
}

export default Link;