import React from "react";
import "./style.css";
import emailIcon from "../../uploads/email.svg";
import phoneIcon from "../../uploads/phone.svg";
import whatsappIcon from "../../uploads/whatsapp.svg";

const Navigation = ({
  whatsapp,
  phone,
  email
}) => {
  return (
    <section className="navigation">
      <div className="float">
        <a className="link" href={whatsapp}>
         <img className="icon" src={whatsappIcon} alt="Whatsapp"/>
          <span className="text">Whatsapp</span>
        </a>
        <a className="link" href={phone}>
          <img className="icon" src={phoneIcon} alt="Phone"/>
          <span className="text">Phone</span>
        </a>
        <a className="link" href={email}>
          <img className="icon" src={emailIcon} alt="Email"/>
          <span className="text">Email</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;