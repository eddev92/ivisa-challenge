import React from 'react';
import '../../../styles/body.css';
import CardComponent from '../card';
import FormCardComponent from '../form';

const BodyComponent = ({ cards, openForm = () => {}, showForm, handleChange = () => {}, card = {}, selectTypeCard = () => {}, addClient = () => {}, cardSelected, deleteCard = () => {}, handleCardForDefault = () => {} }) => {
  const listCards = cards && cards.map((card, index) => {
    return <CardComponent card={card} deleteCard={deleteCard} handleCardForDefault={handleCardForDefault} index={index} />
  })
  return (
    <div className="main-body-content-tab row">
      <div className="list-cards col-12">
        <span className="title-body border-bttm">My Cards</span>
        <ul>
          {listCards && listCards}
          {!cards.length && <span className="title-body-empty">Empty section</span>}
        </ul>
      </div>
      <div className="button-add-card col-12">
        <span className="title-body add-card" onClick={openForm}>+ Add New Card</span>
        <FormCardComponent show={showForm} handleChange={handleChange} card={card} selectTypeCard={selectTypeCard} addClient={addClient} cardSelected={cardSelected} />
      </div>
    </div>
  )
}

export default BodyComponent;
