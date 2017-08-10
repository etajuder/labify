import { AsyncStorage, ToastAndroid } from 'react-native';
import { setLoggedInUser, setLoginError } from '../actions/userActions';
import axiosCall from '../utils/axiosCall';

export default function checkAuth(store) {
  try {
    AsyncStorage.getItem('USER:DATA:PERS')
      .then((data) => {
        const userData = JSON.parse(data);
        axiosCall.defaults.headers = {
          'x-access-token': userData.token
        };
        store.dispatch(setLoggedInUser(userData.data));
      })
      .catch(() => {
        ToastAndroid.show('Please login', ToastAndroid.LONG);
      });
  } catch (error) {
    store.dispatch(setLoginError('User not logged in'));
  }
}
