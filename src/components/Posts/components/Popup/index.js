import React, { useState } from 'react';
import Item from '../Item';
import "./style.css"
const Popup = ({background, title,subtitle, popup:{description , company, tags} }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    
    <Item background={background} title={title} onClick={() => setVisible(true)}/>
    { visible && 
    <div className="overlay">
      <div className="popup">
        
          <button className="popup__close" onClick={() => setVisible(false)}>&times;</button>
          <div className="popup__image" style={{backgroundImage: `url(${background})` }} alt={title}>
            <div className="popup__titles">
            <h2 className="popup__subtitle">{subtitle}</h2>
          <h3 className="popup__title">{title}</h3>
            </div>
          
          </div>
          <div className="popup__text">
          <div className="popup__left">
            <div className="popup__left__card">
              <h4 className="popup__subtitles">Company <br/></h4>
              <span className="popup__left__infos">{company}</span>
            </div>
            <div className="popup__left__card">
              <h4 className="popup__subtitles">Technologies</h4>
              <div className="popup__tags">
                {
                  tags.map( (tag) => <span className="popup__tag">{tag}</span>)
                }
              </div>
              </div>
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