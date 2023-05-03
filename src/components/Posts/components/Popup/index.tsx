import React, {FC, useState } from 'react';
import { PopupType } from '../../typings';
import Item from '../Item';
import "./style.css"

type PopupProps = {
  background: string;
  title: string;
  subtitle: string;
  popup: PopupType;
}

const Popup:FC<PopupProps> = ({background, title, subtitle, popup:{description, company, tags, tagTitle, buttons } }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    
    <Item background={background} title={title} onClick={() => setVisible(true)}/>
    { visible && 
    <div className="overlay">
      <div className="popup">
        
          <button className="popup__close" onClick={() => setVisible(false)}>&times;</button>
          <div className="popup__image" style={{backgroundImage: `url(${background})` }}>
            <div className="popup__titles">
            <h2 className="popup__subtitle">{subtitle}</h2>
          <h3 className="popup__title">{title}</h3>
            </div>
          
          </div>
          <div className="popup__text">
          <div className="popup__left">
            {
              company && (
            <div className="popup__left__card">
              <h4 className="popup__subtitles">Company <br/></h4>
              <span className="popup__left__infos">{company}</span>
            </div> )
            }
            
              {
                tags && tags.length > 0 && (
                  <div className="popup__left__card">
                  <h4 className="popup__subtitles">{tagTitle}</h4>
                  <div className="popup__tags">
                      {
                        tags.map( (tag) => <span className="popup__tag">{tag}</span>)
                      }
                  </div>
                  </div>
                )
              }
              
             
              
       

              {buttons && buttons?.length > 0 ? (
                <div className="popup__left__buttons">{
                  buttons.map((button) => (
                    <a
                      className="popup__left__button"
                      target="_blank"
                      rel="noreferrer"
                      href={button.link}
                    >
                    {button.label}
                    </a>
                  ))}
                  </div>
              ) : null }
                
            </div>
         
          <p className="popup__description" dangerouslySetInnerHTML={{__html: description}}/>
          </div>
      </div>
      </div>
    }
    </>
  )
};

export default Popup