import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Book Lab',
    drawerLabel: 'Book Lab',
    drawerIcon: ({tintColor}) => (
      <Icon name={'event-available'} style={{ width: 40, height: 40, color: tintColor }} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
      </View>
    );
  }

}




export default ProfileScreen;