import { 
  CARD_ACTION, RESET_VALUES_ACTION,
} from "../../constants/actions";

export const addCard = (card) => {
  return {
    type: CARD_ACTION.CARD_ACTION_ADD_CARD,
    card,
  }
}

export const showFormCard = () => {
  return {
    type: CARD_ACTION.CARD_ACTION_SHOW_ADD_CLIENT
  }
}

// export const hiddenAddClient = () => {
//   return {
//     type: CLIENT_ACTION.CLIENT_ACTION_HIDDEN_ADD_CLIENT,
//   }
// }

export const handleChange = (value, id) => {
  return {
    type: CARD_ACTION.CARD_ACTION_HANDLE_INFO_CARD,
    value,
    id
  }
}
export const deleteCard = (card) => {
  return {
    type: CARD_ACTION.CARD_ACTION_DELETE_CARD,
    cardSelected: card,
  }
}

export const resetValues = () => {
  return {
    type: RESET_VALUES_ACTION.RESET_VALUES
  }
}

export const changeDefaultCard = (card) => {
  return {
    type: CARD_ACTION.CARD_ACTION_CHANGE_DEFAULT_CARD,
    cardSelected: card,
  }
}

export const changeDefaultCardOk = (card) => {
  return {
    type: CARD_ACTION.CARD_ACTION_CHANGE_DEFAULT_CARD_OK,
    cardSelected: card,
  }
}

