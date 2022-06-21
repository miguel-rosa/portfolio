import React, {FC} from 'react';
import Item from '../Item';
import "./style.css"

type LinkProps = {
  background: string;
  title: string;
  link: string;
}

const Link:FC<LinkProps> = ({background, title, link}) => {
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