import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button'
import { Hideo } from 'react-native-textinput-effects';
import { NavigationActions } from 'react-navigation';
import { userLogin } from '../actions/userActions';

const bottom = 180 / 100;
const styles = StyleSheet.create({
  headerDescription: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLogo: {
    width: 100,
    height: 100,
  },
  loginHeaderText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: "400"
  },
  loginPane: {
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: 'center',
    width: '80%',
    height: '30%',
    marginTop: 20,
    padding: 5,
  }
});

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: { matricNumber: '', password: '' } }
    this.render = this.render.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onNumberChange(text) {
    const user = this.state.user;
    user.matricNumber = text;
    console.log(text);
    this.setState({ user });
  }

  onPasswordChange(text) {
    const user = this.state.user;
    user.password = text;
    console.log(text);
    this.setState({ user });
  }

  onSubmit() {
    const user = this.state.user;
    this.props.userLogin(user)
      .then(() => {
        Alert.alert('Success', 'User logged in successfully');
      })
      .catch(() => {
        Alert.alert('Error', 'Error occurred');
      });
  }
  static navigationOptions = {
    title: "Login",
    header: null,
    headerVisible: false,
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.headerDescription}>
          <Image source={require('../assets/images/locksmall.png')} style={styles.loginLogo} />
          <Text style={styles.loginHeaderText}>
            Sign In
          </Text>
          <View style={styles.loginPane}>
            <Hideo
              style={{ marginTop: 0, height: 50 }}
              iconClass={FontAwesomeIcon}
              iconName={'school'}
              iconColor={'white'}
              onChangeText={this.onNumberChange}
              iconBackgroundColor={'rgba(0,0,0,0.1)'}
              inputStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }}
            />

            <Hideo
              style={{ marginTop: 0, height: 50, }}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'white'}
              onChangeText={this.onPasswordChange}
              iconBackgroundColor={'rgba(0,0,0,0.1)'}
              inputStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }}
            />
            <Button style={{ backgroundColor: '#FF4081' }} textStyle={{ fontSize: 18, color: '#fff' }} onPress={this.onSubmit}>
              Login
            </Button>
          </View>
        </LinearGradient>
      </View>
    );
  }

}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps, { userLogin })(LoginScreen);
