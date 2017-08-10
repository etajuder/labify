import actionTypes from '../constants';
import initialState from './initialState';

export default function bookings(state = initialState.manageBookings, action) {
  switch(action.type) {
    case actionTypes.GET_LABS_SUCCESS:
      return {
        ...state,
        labs: [...action.labs]
      };
    case actionTypes.GET_LABS_PURPOSES_SUCCESS:
      return {
        ...state,
        purposes: [...action.purposes]
      }
    case actionTypes.LAB_BOOKING_SUCCESS:
      return {
        ...state,
        bookings: [...state.bookings, action.booking]
      }
    case actionTypes.GET_LAB_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: [...action.bookings]
      }
    default:
      return state;
  }
}