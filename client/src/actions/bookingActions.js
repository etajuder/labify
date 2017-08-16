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

export function cancleLabSuccess(booking) {
  return {
    type: actionTypes.CANCEL_LAB_SUCCESS,
    booking
  }
}


export function getAllLabs(){
  return (dispatch) => {
     return axios.get('/labs')
      .then((labs) => {
        console.log(labs);
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
        console.log(response);
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
    return axios.post('/addbooking', `purposeId=${booking.purposeId}&labId=${booking.labId}&userId=${booking.studentId}&date=${booking.date}&time=${booking.time}`)
      .then((booking) => {
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
         dispatch(getLabBookingsSuccessful(bookings.data));
      })
      .catch((error) => {
        ToastAndroid.show('Server error, please try again', ToastAndroid.LONG);
        console.log(error);
      });
  }
}

export function cancelBooking(booking) {
  return (dispatch) => {
    return axios.post('/cancelbooking', `bookingId=${booking.id}`)
      .then((response) => {
        ToastAndroid.show('Lab Booking Canceled', ToastAndroid.LONG);
        dispatch(cancleLabSuccess(booking));
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show('Server error, could not cancle lab booking', ToastAndroid.LONG);
      });
  }
}
