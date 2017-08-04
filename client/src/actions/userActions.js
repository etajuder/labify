import actionTypes from '../constants';
import axios from '../utils/axiosCall';

export function setLoggedInUser(user) {
  return {
    type: actionTypes.LOGIN_USER,
    user
  }
}

export function setLoginError(error) {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    error
  }
}

export function userLogin(user) {
  return (dispatch) => {
    return axios.post('/students', {...user, regNo: user.matricNumber})
      .then((user) => {
        console.log(user);
        dispatch(setLoggedInUser(user));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoginError('Invalid Credential'));
      });
  };
}