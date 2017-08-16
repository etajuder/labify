import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import faker from 'faker';
import Button from 'apsl-react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { Hideo, Makiko, Hoshi } from 'react-native-textinput-effects';
import { FormLabel, FormInput } from 'react-native-elements';
import { registerUser } from '../actions/userActions';
import * as Progress from 'react-native-progress';

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
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
    padding: 5,
  }
});

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: { regNo: '', password: '', fullName: '', email: '', username: faker.internet.userName() }, isLoading: false }
    this.render = this.render.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static navigationOptions = {
    title: "SignUp",
    header: null,
    headerVisible: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error })
  }

  onSubmit() {
    this.setState({ isLoading: true });
    const user = { ...this.state.user };
    this.props.registerUser(user)
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.headerDescription}>
          <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
            <View style={{ marginTop: 20 }}>
              <FontAwesomeIcon name="close" size={30} color="#fff" onPress={() => this.props.navigation.dispatch({ type: 'Login' })} />
            </View>
            <View style={{ marginTop: 30 }}>

              <FormLabel>Full Name</FormLabel>
              <FormInput onChangeText={(text) => this.setState({ user: { ...this.state.user, fullName: text } })} />
              <FormLabel>Student Number</FormLabel>
              <FormInput onChangeText={(text) => this.setState({ user: { ...this.state.user, regNo: text } })} />

              <FormLabel>Email Address</FormLabel>
              <FormInput onChangeText={(text) => this.setState({ user: { ...this.state.user, email: text } })} />


              <FormLabel>Pass Key</FormLabel>
              <FormInput onChangeText={(text) => this.setState({ user: { ...this.state.user, password: text } })} />
    
              {!isLoading &&
                <Button style={{ backgroundColor: '#FF4081', marginTop: 10 }} textStyle={{ fontSize: 18, color: '#fff' }} onPress={this.onSubmit}>
                  Register
              </Button>
              }
              {isLoading &&
                <Progress.Bar indeterminate width={250} style={{ marginTop: 15 }} />
              }
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

}
SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps, { registerUser })(SignUpScreen);
