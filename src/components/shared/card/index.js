import React from 'react';
import '../../../styles/card.css';
import { TranformData } from '../../../utils/transform';

const CardComponent = ({ card = {}, handleCardForDefault = () => {}, deleteCard = () => {}, index }) => {
  const getTypeCard = TranformData.getTypeCard(card.typeCard);
  const getLogoCard = TranformData.getLogoCard(card.typeCard);

  return (
    <li className="main-client-card row" key={`card-${index}`}>
      <div className="col-1 section-img-check">
      {
        (card && card.isDefault) ?
          <img src="images/ok_green.svg" />
        :
        
        <img src="images/ok_grey.svg" />
      }
      </div>
      <div className="col-2 section-img-card">
        <img src={getLogoCard} />
      </div>
      <div className="col-7">
        <div className="info-client-card">
          <span>{getTypeCard} **** **** **** {card.number.slice(card.number.length-4)}</span>
          <span>Ex.Date: {card.expMonth}/{card.expYear}</span>
        </div> 
      </div>
         <div className="col-2 links">
        {/* <button className="col-12" onClick={addCard.bind(this, client, position)}>Add Card</button> */}
          <a onClick={deleteCard.bind(this, card)}>Remove</a>
          <a  data-toggle="modal" data-target="#exampleModal" onClick={handleCardForDefault.bind(this, card)}>Default</a>
        </div>
    </li>
  )
}

export default CardComponent;
