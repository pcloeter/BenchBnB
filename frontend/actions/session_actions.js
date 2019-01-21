import {thunk} from 'react-redux';
import ApiUtils from '../util/session_api_util';

// export const LOGIN_USER
// export const LOGOUT
// export const SIGN_UP
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser= (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});



// TODO

export const login = (user) => {
  return dispatch => {
    return ApiUtils.login(user).then( user => {
      return dispatch(receiveCurrentUser(user));
    }), (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    };
  };
};

export const signup = (user) => {
  return dispatch => {
    return ApiUtils.signup(user).then( user => {
      return dispatch(receiveCurrentUser(user));
    }), (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    };
  };
};

export const logout = () => {
  return dispatch => {
    return ApiUtils.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };
};