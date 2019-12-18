import React from 'react';
import '../../../styles/body.css';
import CardComponent from '../card';
import FormCardComponent from '../form';

const BodyComponent = ({ openForm = () => {}, showForm }) => {
  return (
    <div className="main-body-content-tab row">
      <div className="list-cards col-12">
        <span className="title-body">My Cards</span>
        <ul>
          <CardComponent />
        </ul>
      </div>
      <div className="button-add-card col-12">
        <span className="title-body add-card" onClick={openForm}>+ Add New Card</span>
        <FormCardComponent show={showForm} />
      </div>
    </div>
  )
}

export default BodyComponent;
