import React from 'react';
import { StyleSheet, View, Image, Text, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appStyles from '../assets/style/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';
import { userLogout } from '../actions/userActions';



class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.userLogout = this.userLogout.bind(this);
  }

  userLogout() {
    AsyncStorage.clear()
      .then(() => {
        this.props.userLogout();
      });
  }

  render() {
    const { user } = this.props;
    return (
      <LinearGradient colors={['#1e3c72', '#2a5298']} style={appStyles.bodyPane}>
        <View style={appStyles.profilePane}>
          <View style={appStyles.userProfile}>
            <Icon name={'settings'} style={appStyles.actionIcon} />
            <Image source={require('../assets/images/user_circle.png')} style={appStyles.userProfileImage} />
            <Icon name={'settings-power'} style={appStyles.actionIcon} onPress={this.userLogout} />
          </View>
          <View style={appStyles.userMetaData}>
            <Text style={appStyles.userFullName}>
              Matric No: {user.regNo}
            </Text>
            <Text style={appStyles.userFullName}>
              {user.fullName}
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
              <Icon name={'account-box'} style={{ color: '#fff', fontSize: 40 }} onPress={() => this.props.navigation.dispatch({ type: 'EditProfile' }) } />
              <Text style={{ color: '#fff' }}>Edit Profile</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

MainScreen.navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: '#1e3c72' },
    headerTitleStyle: { color: '#ffffff' }
  }

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  userLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { userLogout })(MainScreen);