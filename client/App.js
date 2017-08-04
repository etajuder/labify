import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './src/store/configureStore';
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('client', () => App);

export default App;