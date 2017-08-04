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
      };
    default:
     return state;
  }
}