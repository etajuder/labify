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
  Alert,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button'
import { Hideo } from 'react-native-textinput-effects';
import { NavigationActions } from 'react-navigation';
import { userLogin } from '../actions/userActions';
import * as Progress from 'react-native-progress';
import appStyles from '../assets/style/Styles';

const bottom = 180 / 100;
const styles = StyleSheet.create({
  headerDescription: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLogo: {
    width: 40,
    height: 40,
  },
  loginHeaderText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: "400"
  },
  loginPane: {
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
    padding: 5,
  }
});

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: { matricNumber: '', password: '' }, isLoading: false, error: '' }
    this.render = this.render.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.error) {
      this.setState({ isLoading: false, error: nextProps.error });
    }
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
    this.setState({ isLoading: true });
    const user = this.state.user;
    this.props.userLogin(user)
      .then(() => {
        this.setState({ isLoading: false });
      });
  }
  static navigationOptions = {
    title: "Login",
    header: null,
    headerVisible: false,
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.headerDescription}>
          <Image source={require('../assets/images/locksmall.png')} style={styles.loginLogo} />
          <Text style={styles.loginHeaderText}>
            Sign In
          </Text>
          <ScrollView style={{ width: 300 }}>
          <View style={styles.loginPane}>
            <Hideo
              style={{ marginTop: 10, height: 50 }}
              iconClass={FontAwesomeIcon}
              iconName={'school'}
              iconColor={'white'}
              onChangeText={this.onNumberChange}
              iconBackgroundColor={'rgba(0,0,0,0.1)'}
              inputStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }}
            />

            <Hideo
              style={{ marginTop: 10, height: 50, }}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'white'}
              onChangeText={this.onPasswordChange}
              iconBackgroundColor={'rgba(0,0,0,0.1)'}
              inputStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }}
            />
            <Text style={appStyles.errorText}>
              {this.state.error}
            </Text>
            {!isLoading &&
            <Button style={{ backgroundColor: '#FF4081' }} textStyle={{ fontSize: 18, color: '#fff' }} onPress={this.onSubmit}>
              Login
            </Button>
            }
            {!isLoading &&
              <Text style={{ color: '#fff', fontSize: 19 }} onPress={() => this.props.navigation.dispatch({ type: 'SignUp' })}>Register</Text>
            }
            {isLoading &&
            <Progress.Bar indeterminate width={200} />
            }
           
          </View>
           </ScrollView>
        </LinearGradient>
      </View>
    );
  }

}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});


export default connect(mapStateToProps, { userLogin })(LoginScreen);
