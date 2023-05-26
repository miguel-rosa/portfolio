import  { FC, useState } from "react";
import "./style.css";
import { NavigationType, UserType } from './typings'
import { GoPlusSmall } from 'react-icons/go'

type Props = {
  navigation: NavigationType;
  user: UserType
};

const Header:FC<Props> = ({
navigation,
user: {
  name
}
}) => {

  const [active, setActive] = useState(false);
  return (
    <header className="header">
      <h1 className="name">{name}</h1>
      <button
        onClick={() => setActive(prevActive => !prevActive)}
      className={`menu `}>

        <GoPlusSmall className={`menu-icon ${active ? 'menu-icon--active' : ''}`} size={40} color="white"/>

      </button>

      <div className={`menu-items ${active ? 'menu-items--active' : 'menu-items--inactive'}`}>

      <p className="menu-item">
        <a target="_blank" rel="noreferrer" className="menu-link" href={`mailto:${navigation.email}`}>
      Email

        </a>
      </p>
      <p className="menu-item">
      <a target="_blank" rel="noreferrer" className="menu-link" href={`https://github.com/${navigation.github}`}>
    Github

      </a>
      </p>
      <p className="menu-item">
      <a target="_blank" rel="noreferrer" className="menu-link" href={`https://linkedin.com/in/${navigation.linkedin}`}>
    Linkedin 

      </a>
      </p>
      <p className="menu-item">
      <a target="_blank" rel="noreferrer" className="menu-link" href={navigation.whatsapp}>
      Phone

      </a>
      </p>
      </div>
    </header>
  );
}

export default Header;