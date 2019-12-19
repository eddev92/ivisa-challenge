import React from 'react';
import './../../styles/home.css';

const TabsComponent = () => {

  return (
    <div className="main-home row">
      <div className="col-2">
        <span>MY<br/> APPLICATIONS</span>
      </div>
      <div className="col-2">
        <span>MY<br/> TRAVEKERS</span>
      </div>
      <div className="col-2">
        <span>MY<br/> CARDS</span>
      </div>
      <div className="col-2">
        <span>MY<br/>  ACCOUNT</span>
      </div>
    </div>
  )
}

export default TabsComponent;
