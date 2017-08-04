import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import ProfileScreen from '../components/ProfileScreen';
import BookLab from '../components/BookLab';
import ViewLabs from '../components/ViewLabs';
import MainScreen from '../components/MainScreen';
import ManageBookings from '../components/ManageBooking';
import Intro from '../components/Intro';
import SignUpScreen from '../components/SignUpScreen';


export const AppNavigator = StackNavigator({
  Intro: { screen: Intro },
  Profile: {screen: ProfileScreen},
  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },
  SignUp: {screen: SignUpScreen},
  BookLab: { screen: BookLab },
  ViewLabs: { screen: ViewLabs},
  ManageBookings: { screen: ManageBookings }
}, {
  headerMode: 'screen',
  style: { backgroundColor: 'red'},
  tintColor: '#4aaee7'
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);