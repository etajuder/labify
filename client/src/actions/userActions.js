import actionTypes from '../constants';
import axios from '../utils/axiosCall';
import { AsyncStorage, ToastAndroid } from 'react-native';

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

export function userLogout() {
  return {
    type: actionTypes.USER_LOGOUT
  }
}

export function userLogin(user) {
  return (dispatch) => {
    return axios.post('/students/login', {...user, regNo: user.matricNumber})
      .then((response) => {
        AsyncStorage.setItem('USER:DATA:PERS', JSON.stringify(response.data));
        axios.defaults.headers = {
           'x-access-token': response.data.token
         };
        dispatch(setLoggedInUser(response.data.data));
      })
      .catch((error) => {
        dispatch(setLoginError('Invalid Login details'));
      });
  };
}

export function registerUser(user) {
  return (dispatch) => {
    return  axios.post('/students', user)
     .then((response) => {
         AsyncStorage.setItem('USER:DATA:PERS', JSON.stringify(response.data));
         axios.defaults.headers = {
           'x-access-token': response.data.token
         };
         dispatch(setLoggedInUser(response.data.data));
      })
      .catch((error) => {
        dispatch(setLoginError('Invalid Credential'));
      });
      ;
  }
}