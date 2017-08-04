import { combineReducers } from 'redux';
import nav from './navReducer';
import auth from './authReducer';

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;