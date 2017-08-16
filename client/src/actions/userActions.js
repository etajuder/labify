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


export function userProfileUpdatedSuccessfully(user) {
  return {
    type: actionTypes.PROFILE_UPDATE_SUCCESS,
    user
  }
}

export function userLogout() {
  return {
    type: actionTypes.USER_LOGOUT
  }
}

export function userLogin(user) {
  return (dispatch) => {
    return axios.post('/login', `regNo=${user.matricNumber}&password=${user.password}`)
      .then((response) => {
        AsyncStorage.setItem('USER:DATA:PERS', JSON.stringify(response.data));
        dispatch(setLoggedInUser(response.data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoginError('Invalid Login details'));
      });
  };
}

export function registerUser(user) {
  return (dispatch) => {
    return  axios.post('/register', `fullName=${user.fullName}&password=${user.password}&email=${user.email}&regNo=${user.regNo}`)
     .then((response) => {
       console.log(response.data.data);
         AsyncStorage.setItem('USER:DATA:PERS', JSON.stringify(response.data));
         dispatch(setLoggedInUser(response.data.data));
      })
      .catch((error) => {
        dispatch(setLoginError('Invalid Credential'));
      });
      ;
  }
}


export function updateProfile(user) {
  return (dispatch) => {
    return axios.post('/updateinfo', `fullName=${user.fullName}&regNo=${user.regNo}&email=${user.email}`)
      .then((user) => {
        console.log(user);
        dispatch(userProfileUpdatedSuccessfully(user));
        ToastAndroid.show("Profile updated successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show('Error updating profile', ToastAndroid.LONG);
      });
      ;
  }
}