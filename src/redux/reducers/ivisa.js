import { CARD_ACTION, RESET_VALUES_ACTION } from "../../constants/actions";
import { defaultValues } from "../../constants/constants";

let defaultState = defaultValues;

const ivisa = (state = defaultState, action) => {
  switch (action.type) {
    case CARD_ACTION.CARD_ACTION_SHOW_ADD_CLIENT:
      return {
        ...state,
        showForm: !state.showForm
      }

    case CARD_ACTION.CARD_ACTION_HANDLE_INFO_CARD: {
      const aux = { ...state.card };
      aux[action.id] = action.value;

      return {
        ...state,
        card: aux,
        cardSelected: (action.id === 'typeCard') ? action.value : null
      }
    }

    case CARD_ACTION.CARD_ACTION_ADD_CARD: {
      const aux = [ ...state.cards ];
      aux.push(action.card)
      return  {
        ...state,
        cards: aux
      }
    }

    case CARD_ACTION.CARD_ACTION_DELETE_CARD: {
      const aux = [ ...state.cards ];
      aux.splice(state.cards.indexOf(action.cardSelected), 1)
      return  {
        ...state,
        cards: aux
      }
    }

    case CARD_ACTION.CARD_ACTION_CHANGE_DEFAULT_CARD: {
      const cardSelected = action.cardSelected;
      
      return  {
        ...state,
        cardSelectedForChangeDefault: cardSelected
      }
    }

    case CARD_ACTION.CARD_ACTION_CHANGE_DEFAULT_CARD_OK: {
      const aux = [ ...state.cards ];
      const cardSelected = action.cardSelected;
      const indexAux = aux.indexOf(cardSelected)

      aux.map((card, index) => {
        if ((card.name === cardSelected.name)
          && (card.number === cardSelected.number)
          && (index === indexAux)) {
            card.isDefault = true;
          }
          return card;
      })
      
      return  {
        ...state,
        cards: aux
      }
    }

    default:
      return state
  }
}

export default ivisa;
