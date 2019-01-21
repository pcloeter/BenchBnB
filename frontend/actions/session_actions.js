import {thunk} from 'react-redux';
import ApiUtils from '../util/session_api_util';

// export const LOGIN_USER
// export const LOGOUT
// export const SIGN_UP
export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const login = (user) => ({
  type: RECEIVE_USER,
  user,
});

const logout = () => ({
  type: LOGOUT_USER,
});

const signup = (user) => ({
  type: RECEIVE_USER,
  user,
});

// export const fetchChirps = () => dispatch => {
//   return getChirps()
//     .then(chirps => dispatch(receiveChirps(chirps)));
// }


// TODO
const receiveCurrentUser = (currentUser) => (dispatch) => {
  return (ApiUtils.signup(currentUser)).then(
    return dispatch(signup(currentUser)));
  }
};

const logoutCurrentUser = () => (dispatch) => {

};

const receiveErrors (errors) => (dispatch) => {

};