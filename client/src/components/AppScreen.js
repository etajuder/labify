import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import { userLogout } from '../actions/userActions';
import MainScreen from './MainScreen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const AppScreen = DrawerNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Main: {
    screen: MainScreen
  }
})



export default AppScreen;