import { combineReducers } from 'redux';
import nav from './navReducer';
import auth from './authReducer';
import booking from './bookingReducer';

const AppReducer = combineReducers({
  nav,
  auth,
  booking,
});

export default AppReducer;