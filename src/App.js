import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { 
	showFormCard,
	resetValues,
	handleChange,
	addCard,
	deleteCard,
	changeDefaultCard,
	changeDefaultCardOk
} from './redux/actions';
import TabsComponent from './components/home';
import BodyComponent from './components/shared/body';
import ModalComponent from './components/shared/modal';

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
			clients: [],
			ids: []
		};
	}

	handleChange = (e) => {
		if (e) {
			const value = e.target.value;
			const id = e.target.id;

			return this.props.handleChange(value, id);
		}
		return null;
	}

	addClient = () => {
		if (this.props.card &&
			this.props.card.name &&
			this.props.card.number &&
			this.props.card.expMonth &&
			this.props.card.typeCard &&
			this.props.card.securityCode &&
			this.props.card.expYear) {
				if (this.props.card.number.length !== 16) {
					return alert('Card number should have only 16 digits!');
				}
				 this.props.addCard(this.props.card);
				 this.props.resetValues();
				 return this.showForm();
			}
			else return alert('All inputs are required')
	}
	deleteCard = (card) => {
		this.props.deleteCard(card);
	}
	changeDefault = () => {
		if (this.props.cardSelectedForChangeDefault) return this.props.changeDefaultCardOk(this.props.cardSelectedForChangeDefault)
	}
	handleCardForDefault = (card) => {
		this.props.changeDefaultCard(card)
	}
	selectTypeCard = (type) => {
		if (type) {
			return this.props.handleChange(type, "typeCard");
		}
		return null;
	}
	showForm = () => {	
		this.props.showFormCard();
	}
  render() {
		const { showForm, card, cards, cardSelected } = this.props;

		return (
			<div className="App">
					<TabsComponent cards={cards} />
					<BodyComponent 
						cards={cards}
						openForm={this.showForm}
						showForm={showForm}
						handleChange={this.handleChange}
						card={card}
						selectTypeCard={this.selectTypeCard}
						addClient={this.addClient}
						cardSelected={cardSelected}
						deleteCard={this.deleteCard}
						handleCardForDefault={this.handleCardForDefault}
					/>
					<ModalComponent changeDefault={this.changeDefault} />
			</div>
  );  
}

}
const mapStateToProps = (state) => {
  return {
		card: state.ivisa.card,
		cardSelected: state.ivisa.cardSelected,
		cards: state.ivisa.cards,
		showForm: state.ivisa.showForm,
		cardSelectedForChangeDefault: state.ivisa.cardSelectedForChangeDefault
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
		showFormCard: () => { dispatch(showFormCard()) },
		changeDefaultCard: (card) => { dispatch(changeDefaultCard(card)) },
		handleChange: (value, id) => { dispatch(handleChange(value, id)) },
		addCard: (card) => { dispatch(addCard(card)) },
		deleteCard: (card) => { dispatch(deleteCard(card)) },
		resetValues: () => { dispatch(resetValues()) },
		changeDefaultCardOk: (card) => { dispatch(changeDefaultCardOk(card)) },
    }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
