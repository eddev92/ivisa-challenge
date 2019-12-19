import React from 'react';
import '../../../styles/form.css';

const FormCardComponent = ({ show, addClient = () => {}, handleChange = () => {}, card = {}, selectTypeCard = () => {}, cardSelected  }) => {
  if (show) {
    return (
      <div className="main-form-card row">
        <div className="row list-buttons-cards">
          <div className="col-3 msg-green">
            <img src="images/ok_green.svg" />
            <span>WE Accept All<br />Debit / Credit  Cards</span>
          </div>
          <div className="col-1 ">
            <img src="images/visa.png" className={cardSelected === 1 ? 'isSelected' : ''} onClick={selectTypeCard.bind(this, 1)} />
          </div>
          <div className="col-1 ">
            <img src="images/mastercard.png" className={cardSelected === 2 ? 'isSelected' : ''} onClick={selectTypeCard.bind(this, 2)} />
          </div>
          <div className="col-1 ">
            <img src="images/discover.png" className={cardSelected === 3 ? 'isSelected' : ''} onClick={selectTypeCard.bind(this, 3)} />
          </div>
          <div className="col-1 ">
            <img src="images/american.png" className={cardSelected === 4 ? 'isSelected' : ''} onClick={selectTypeCard.bind(this, 4)} />
          </div>
        </div>
        <div className="row w100p inputs">
          <div className="col-3 num">
            <span>Name on Card</span>
            <input value={card.name} id="name" onChange={handleChange.bind(this)} />
          </div>
          <div className="col-3 credit">
            <span>Credit / Debit Card Number</span>
            <input type="number" value={card.number} id="number" maxLength={16} onChange={handleChange.bind(this)} />
          </div>
          <div className="col-2 exp-month">
            <span>Exp. Month</span>
            <input value={card.expMonth} type="number" id="expMonth" onChange={handleChange.bind(this)} />
          </div>
          <div className="col-2 exp-year">
            <span>Exp. Year</span>
            <input value={card.expYear} type="number" id="expYear" onChange={handleChange.bind(this)} />
          </div>
          <div className="col-2 security">
            <span>Security Code</span>
            <input value={card.securityCode} type="number" id="securityCode" onChange={handleChange.bind(this)} />
          </div>
        </div>       
        <div className="row w100p footer-form">
          <div className="col-2">
            <img src="images/segured.png" />
            </div>
            <div className="col-10">
             <button onClick={addClient} >Add Card</button>
            </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default FormCardComponent;
