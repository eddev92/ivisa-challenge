import React from 'react';
import FormComponent from '../shared/body';
import './../../styles/home.css';

const TabsComponent = ({ showAddClient = false, client = {} , hiddenAddClient = () => {}, handleChange = () => {}, addClient = () => {} }) => {
  console.log(showAddClient)
  // if (showAddClient) return 

  return (
    <div className="main-home row">
      <div className="col-2">
        <span>MY APPLICATIONS</span>
      </div>
      <div className="col-2">
        <span>MY TRAVEKERS</span>
      </div>
      <div className="col-2">
        <span>MY<br/> CARDS</span>
      </div>
      <div className="col-2">
        <span>MY ACCOUNT</span>
      </div>
    </div>
  )
}

export default TabsComponent;
