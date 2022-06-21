import React, { FC } from "react";
import "./style.css";
import emailIcon from "../../uploads/email.svg";
import whatsappIcon from "../../uploads/whatsapp.svg";
import linkedinIcon from "../../uploads/linkedin.png";
import githubIcon from "../../uploads/github.png";
import { NavigationType } from "./typings";

type NavigationProps = NavigationType;

const Navigation:FC<NavigationProps> = ({
  whatsapp,
  email,
  linkedin,
  github
}) => {
  return (
    <section className="navigation">
      <div className="float">
    
        <a className="link" target="_blank" rel="noreferrer" href={`https://wa.me/${whatsapp}`}>
         <img className="icon" src={whatsappIcon} alt="Whatsapp"/>
          <span className="text">Whatsapp</span>
        </a>
        <a className="link" target="_blank" rel="noreferrer" href={`mailto:${email}`}>
          <img className="icon" src={emailIcon} alt="Email"/>
          <span className="text">Email</span>
        </a>
        <a className="link" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/${linkedin}`}>
         <img className="icon" src={linkedinIcon} alt="Linkedin"/>
          <span className="text">Linkedin</span>
        </a>
        <a className="link" target="_blank" rel="noreferrer" href={`https://github.com/${github}`}>
         <img className="icon" src={githubIcon} alt="Linkedin"/>
          <span className="text">Github</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;