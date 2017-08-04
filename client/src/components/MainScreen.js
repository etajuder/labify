import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appStyles from '../assets/style/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';



class MainScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: '#1e3c72' },
    headerTitleStyle: { color: '#ffffff' }
  }
  render() {
    return (
      <LinearGradient colors={['#1e3c72', '#2a5298']} style={appStyles.bodyPane}>
        <View style={appStyles.profilePane}>
          <View style={appStyles.userProfile}>
            <Icon name={'settings'} style={appStyles.actionIcon} />
            <Image source={require('../assets/images/user_circle.png')} style={appStyles.userProfileImage} />
            <Icon name={'settings-power'} style={appStyles.actionIcon} onPress={() => this.props.navigation.dispatch({ type: 'Login' })} />
          </View>
          <View style={appStyles.userMetaData}>
            <Text style={appStyles.userFullName}>
              Etanuwoma Jude
            </Text>
          </View>
        </View>
        <View style={appStyles.appMenu}>
          <View style={appStyles.appMenuHBox}>
            <View style={appStyles.menuAction} >
              <Icon name={'event'} style={{ color: '#fff', fontSize: 40 }} onPress={() => this.props.navigation.dispatch({ type: 'BookLab' })} />
              <Text style={{ color: '#fff' }}>Book Lab</Text>
            </View>
            <View style={appStyles.menuAction}>
              <Icon name={'remove-red-eye'} style={{ color: '#fff', fontSize: 40 }} onPress={() => this.props.navigation.dispatch({ type: 'ViewLabs' })} />
              <Text style={{ color: '#fff' }}>View All</Text>
            </View>
          </View>
          <View style={appStyles.appMenuHBox}>
            <View style={appStyles.menuAction}>
              <Icon name={'edit'} style={{ color: '#fff', fontSize: 40 }} onPress={() => this.props.navigation.dispatch({ type: 'ManageBookings' })} />
              <Text style={{ color: '#fff' }}>Manage Lab</Text>
            </View>
            <View style={appStyles.menuAction}>
              <Icon name={'account-box'} style={{ color: '#fff', fontSize: 40 }} />
              <Text style={{ color: '#fff' }}>Edit Profile</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(MainScreen);