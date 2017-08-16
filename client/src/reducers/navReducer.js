import { NavigationActions } from 'react-navigation';
import { Alert } from 'react-native';
import { AppNavigator } from '../navigators/AppNavigator';
import actionTypes from '../constants';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const navState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Intro');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  navState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
    case actionTypes.USER_LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'SignUp':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SignUp' }),
        state
      );
      break;
    case 'AppScreen':
    case actionTypes.LOGIN_USER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Main' })] }),
        state
      );
      break;
    case 'BookLab':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'BookLab' }),
        state
      );
      break;

    case 'ViewLabs':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ViewLabs' }),
        state
      );
      break;
    case 'ManageBookings':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ManageBookings' }),
        state
      );
      break;
    case 'EditProfile':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'EditProfile' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
