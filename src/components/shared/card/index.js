import React from 'react';
import '../../../styles/card.css';

const CardComponent = ({ position = null,  client = { names: '', lastNames: '', age: null, date: '' }, addCard = () => {}, showProbability = () => {} }) => {
  return (
    <li className="main-client-card row">
      <div className="col-1 section-img">
      {/* <img src="images/img_avatar.png" /> */}
      </div>
      <div className="col-1 section-img">
      {/* <img src="images/img_avatar.png" /> */}
      </div>
      <div className="col-7">
        <div className="info-client-card">
          <span>Nombres: {client.names}</span>
          <span>Apellidos: {client.lastNames}</span>
        </div> 
      </div>
         <div className="col-2">
        {/* <button className="col-12" onClick={addCard.bind(this, client, position)}>Add Card</button> */}
        <a>Remove</a>
        <a>Default</a>
        </div>
    </li>
  )
}

export default CardComponent;
