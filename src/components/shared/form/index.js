import React from 'react';
import '../../../styles/form.css';

const FormCardComponent = ({ show, addClient = () => {} }) => {
  if (show) {
    return (
      <div className="main-form-card row">
        <div className="row list-buttons-cards">
          <div className="col-3 msg-green">
            <img src="images/ok_green.svg" />
            <span>WE Accept All<br />Debit / Credit  Cards</span>
          </div>
          <div className="col-1 ">
            <img src="images/visa.png" />
          </div>
          <div className="col-1 ">
            <img src="images/mastercard.png" />
          </div>
          <div className="col-1 ">
            <img src="images/discover.png" />
          </div>
          <div className="col-1 ">
            <img src="images/american.png" />
          </div>
        </div>
        <div className="row w100p inputs">
          <div className="col-3 num">
            <span>Name on Card</span>
            <input value="" />
          </div>
          <div className="col-3 credit">
            <span>Credit / Debit Card Number</span>
            <input value="" />
          </div>
          <div className="col-2 exp-month">
            <span>Exp. Month</span>
            <input value="" />
          </div>
          <div className="col-2 exp-year">
            <span>Exp. Year</span>
            <input value="" />
          </div>
          <div className="col-2 security">
            <span>Security Code</span>
            <input value="" />
          </div>
        </div>       
        <div className="row w100p footer-form">
          <div className="col-2">
            <img src="images/segured.png" />
            </div>
            <div className="col-10">
             <button>Add Card</button>
            </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default FormCardComponent;
