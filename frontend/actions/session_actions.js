import {thunk} from 'react-redux';
import ApiUtils from '../util/session_api_util';

// export const LOGIN_USER
// export const LOGOUT
// export const SIGN_UP
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser= (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});



// TODO

export const login = (user) => {
  return dispatch => {
    return ApiUtils.login(user).then( user => {
      return dispatch(receiveCurrentUser(user));
    })
  }
};

export const signup = (user) => {
  return dispatch => {
    return ApiUtils.signup(user).then( user => {
      return dispatch(receiveCurrentUser(user));
    })
  }
};

export const logout () => {
  return dispatch => {
    return ApiUtils.logoutCurrentUser().then( () => {
      return dispatch(logoutUser);
    })
  }
}