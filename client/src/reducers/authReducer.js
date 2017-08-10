import actionTypes from '../constants';
import initialState from './initialState';
import isEmpty from 'lodash/isEmpty';

export default function auth(state = initialState.auth, action) {
  switch(action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: !isEmpty(action.user),
        error: '',
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        error: '',
      };
    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
     return state;
  }
}