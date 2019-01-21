import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash'


const sessionReducer = (oldState = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: [action.currectUser.id]};
    case LOGOUT_CURRENT_USER:
      return {id: _nullUser};

    default:
      return oldState;
  }
};

export default sessionReducer;