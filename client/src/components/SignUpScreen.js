import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
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
    this.state = { user: { studentId: '', password: '' } }
    this.render = this.render.bind(this);
  }

  static navigationOptions = {
    title: "SignUp",
    header: null,
    headerVisible: false,
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.headerDescription}>
          <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
            <View style={{ marginTop: 20 }}>
              <FontAwesomeIcon name="close" size={30} color="#fff" onPress={() => this.props.navigation.dispatch({ type: 'Login' })} />
            </View>
            <View style={{ marginTop: 30 }}>
              <Makiko
                label={'Full Name'}
                iconClass={FontAwesomeIcon}
                iconName={'edit'}
                iconColor={'white'}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 10, width: 300 }}
                inputStyle={{ color: '#db786d' }}
              />
              <Makiko
                label={'Student ID'}
                iconClass={FontAwesomeIcon}
                iconName={'school'}
                iconColor={'white'}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 10 }}
                inputStyle={{ color: '#db786d', backgroundColor: 'rgba(0,0,0,0.1)' }}
              />
              <Makiko
                label={'Email'}
                iconClass={FontAwesomeIcon}
                iconName={'email'}
                iconColor={'white'}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 10 }}
                inputStyle={{ color: '#db786d', backgroundColor: 'rgba(0,0,0,0.1)' }}
              />
              <Makiko
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={'white'}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 10 }}
                inputStyle={{ color: '#db786d', backgroundColor: 'rgba(0,0,0,0.1)' }}
              />
              <Button style={{ backgroundColor: '#FF4081', marginTop: 10 }} textStyle={{ fontSize: 18, color: '#fff' }} onPress={() => this.props.navigation.dispatch({ type: 'AppScreen' })}>
                Register
            </Button>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

}
SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(SignUpScreen);
