import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// import TabsComponent from './components/home';
import firebase from 'firebase';
import { 
	showFormCard,
	// hiddenAddClient,
	handleChange,
	addCard,
	deleteCard,
	changeDefaultCard,
	changeDefaultCardOk
} from './redux/actions';
import config from './config';
import TabsComponent from './components/home';
// import { USER_CREDENTIALS } from './constants/constants';
// import IntercorpRetailServices from './services/services';
import BodyComponent from './components/shared/body';
import ModalComponent from './components/shared/modal';

firebase.initializeApp(config);
const publicationRef = firebase.database();
const ref =	publicationRef.ref('/');

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
			clients: [],
			ids: []
		};
	}
	componentDidMount() {
			// this.getClientsFirebase();
	}
  componentDidUpdate() {
		// if (this.props.clients && this.props.clients.length) {
		// 	this.calculateEstimatedAge()
		// }		
	}
	// getClientsFirebase = () => {
	// 	ref.on("value", (snapshot) => {
	// 		if (snapshot.val() !== null) {
	// 			let clientsAux = Object.values(snapshot.val()) && Object.values(snapshot.val())[0];
	// 			clientsAux = Object.values(clientsAux)
	// 			const idsAux = Object.keys(Object.values(snapshot.val())[0]);

	// 			clientsAux = clientsAux.map((client, index) => {
	// 				if (idsAux && idsAux.length) {
	// 					let dateAux = client.client.date.split("-");
	// 						client.client.id = idsAux[index];
	// 						dateAux = dateAux.reverse();
	// 						dateAux = dateAux.join("-");
	// 						client.client.date = dateAux;
	// 				}
	// 				return client.client;
	// 			})
	// 			return this.props.updateClients(clientsAux)
	// 		}
	// 		return this.props.updateClients([])
	// 	}, (error) => {
	// 		console.log("ERROR: " + error.code);
	// 	});
	// }
	handleChange = (e) => {
		console.log(e)
		if (e) {
			const value = e.target.value;
			const id = e.target.id;

			return this.props.handleChange(value, id);
		}
		return null;
	}
	// showAddClientForm = () => {
	// 	return this.props.showAddClient()
	// }
	// hiddenAddClientForm = () => {
	// 	this.props.resetValues();
	// 	return this.props.hiddenAddClient()
	// }
	addClient = () => {
		if (this.props.card &&
			this.props.card.name &&
			this.props.card.number &&
			this.props.card.expMonth &&
			this.props.card.typeCard &&
			this.props.card.securityCode &&
			this.props.card.expYear) {
				// const service = new IntercorpRetailServices(ref);
					// if (this.props.card.number.length !== 16) {
					// 	return alert("Credit Card number is invalid, should have 16 digits.")
					// }
				// this.props.resetValues();
				 this.props.addCard(this.props.card);
				 return this.showForm();
				// return service.saveClient(this.props.client)
			}
			else return alert('All inputs are required')
	}
	deleteCard = (card) => {
		// const service = new IntercorpRetailServices(ref);
		console.log(card)
		this.props.deleteCard(card);
		// return service.deleteClientDB(client);
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
		// const ageAverage = this.calculateEstimatedAge();
		console.log(cardSelected)
		console.log(cards)
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
		// resetValues: () => { dispatch(resetValues()) },
		changeDefaultCardOk: (card) => { dispatch(changeDefaultCardOk(card)) },
    }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
