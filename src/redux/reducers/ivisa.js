import { CARD_ACTION, RESET_VALUES_ACTION } from "../../constants/actions";
import { defaultValues } from "../../constants/constants";

let defaultState = defaultValues;

const ivisa = (state = defaultState, action) => {
  switch (action.type) {
    case CARD_ACTION.CARD_ACTION_ADD_CLIENT:
      return {
        ...state,
        showForm: !state.showForm
      }

    default:
      return state
  }
}

export default ivisa;
