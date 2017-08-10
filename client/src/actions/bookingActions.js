import actionTypes from '../constants';
import axios from '../utils/axiosCall';
import { AsyncStorage, ToastAndroid } from 'react-native';

export function getLabSuccessful(labs) {
  return {
    type: actionTypes.GET_LABS_SUCCESS,
    labs
  }
}

export function getAllLabPurposesSuccessful(purposes) {
  return {
    type: actionTypes.GET_LABS_PURPOSES_SUCCESS,
    purposes
  }
}

export function labBookingSuccessful(booking) {
  return {
    type: actionTypes.LAB_BOOKING_SUCCESS,
    booking
  }
}

export function getLabBookingsSuccessful(bookings) {
  return {
    type: actionTypes.GET_LAB_BOOKINGS_SUCCESS,
    bookings
  }
}

export function getAllLabs(){
  return (dispatch) => {
     return axios.get('/labs')
      .then((labs) => {
        dispatch(getLabSuccessful(labs.data));
      })
      .catch((error) => {
        ToastAndroid.show('Error fetching all labs', ToastAndroid.LONG);
        console.log(error);
      });
    }
  }

export function getAllLabPurposes() {
  return (dispatch) => {
    return axios.get('/purposes')
      .then((response) => {
        dispatch(getAllLabPurposesSuccessful(response.data));
      })
      .catch((error) => {
        ToastAndroid.show('Error fetching data, check your connection', ToastAndroid.LONG);
        console.log(error);
      });
  }
}

export function bookLab(booking) {
  return (dispatch) => {
    return axios.post('/bookings', booking)
      .then((booking) => {
        console.log(booking);
        dispatch(labBookingSuccessful(booking));
      })
      .catch((error) => {
        ToastAndroid.show('Booking could not be submitted try again', ToastAndroid.LONG);
        console.log(error);
      });
  }
}

export function getStudentLabBooking(studentId) {
  return (dispatch) => {
    return axios.get(`/bookings/${studentId}`)
      .then((bookings) => {
        console.log(bookings);
         dispatch(getLabBookingsSuccessful(bookings.data));
      })
      .catch((error) => {
        ToastAndroid.show('Server error, please try again', ToastAndroid.LONG);
        console.log(error);
      });
  }
}
