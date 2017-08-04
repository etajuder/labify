import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AppIntro from 'react-native-app-intro';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

class Intro extends React.Component {
  static navigationOptions = {
    title: "Intro",
    header: null,
    headerVisible: false,
  }
  onSkipBtnHandle = (index) => {
    this.props.navigation.dispatch({ type: 'Login' });
  }
  doneBtnHandle = () => {
    this.props.navigation.dispatch({ type: 'Login' });
  }
  nextBtnHandle = (index) => {
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View style={[styles.header, { width: windowsWidth }]}>
            <View>
              <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('../assets/images/1/c1.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 80,
              left: 30,
              width: windowsWidth,
              height: windowsHeight,
            }} level={20}
            >
              <Image style={{ width: 46 * 2.5, height: 28 * 2.5 }} source={require('../assets/images/1/c2.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 23,
              left: 25,
              width: windowsWidth,
              height: windowsHeight,
            }} level={20}
            >
              <Image style={{ width: 109 * 2.5, height: 68 * 2.5 }} source={require('../assets/images/1/c5.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 65,
              left: 35,
              width: windowsWidth,
              height: windowsHeight,
            }} level={5}
            >
              <Image style={{ width: 23 * 2.5, height: 17 * 2.5 }} source={require('../assets/images/1/c3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Book Lab</Text></View>
            <View level={15}><Text style={styles.description}>Search And Book For Available Lab</Text></View>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View style={[styles.header, { width: windowsWidth }]}>
            <View>
              <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('../assets/images/2/1.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 30,
              left: 40,
              width: windowsWidth,
              height: windowsHeight,
            }} level={20}
            >
              <Image style={{ width: 101 * 2.5, height: 71 * 2.5 }} source={require('../assets/images/2/2.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 10,
              left: 50,
              width: windowsWidth,
              height: windowsHeight,
            }} level={-20}
            >
              <Image style={{ width: 85 * 2.5, height: 73 * 2.5 }} source={require('../assets/images/2/3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>View Lab</Text></View>
            <View level={15}><Text style={styles.description}>View All Your Booked Labs</Text></View>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#406E9F' }]}>
          <View style={[styles.header, { width: windowsWidth }]}>
            <View style={{
              position: 'absolute',
              top: 20,
              left: 20,
              width: windowsWidth,
              height: windowsHeight,
            }}
            >
              <Image style={{ width: 138 * 2.5, height: 83 * 2.5 }} source={require('../assets/images/3/3.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 25,
              left: 40,
              width: windowsWidth,
              height: windowsHeight,
            }} level={-15}
            >
              <Image style={{ width: 103 * 2.5, height: 42 * 2.5 }} source={require('../assets/images/3/4.png')} />
            </View>
            <View level={10}>
              <Image style={{ width: 95 * 2.5, height: 55 * 2.5 }} source={require('../assets/images/3/1.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 65,
              left: 120,
              width: windowsWidth,
              height: windowsHeight,
            }} level={25}
            >
              <Image style={{ width: 47 * 2.5, height: 43 * 2.5 }} source={require('../assets/images/3/2.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Get Notified</Text></View>
            <View level={15}><Text style={styles.description}>Get Real Time Notification When It's Your Turn</Text></View>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#DB4302' }]}>
          <View style={[styles.header, { width: windowsWidth }]}>
            <View style={{
              position: 'absolute',
              top: 25,
              left: 55,
              width: windowsWidth,
              height: windowsHeight,
            }} level={15}
            >
              <Image style={{ width: 96 * 2.5, height: 69 * 2.5 }} source={require('../assets/images/4/4.png')} />
            </View>
            <View>
              <Image style={{ width: 50 * 2.5, height: 63 * 2.5 }} source={require('../assets/images/4/1.png')} />
            </View>
            <View style={{
              position: 'absolute',
              top: 20,
              left: 70,
              width: windowsWidth,
              height: windowsHeight,
            }} level={20}
            >
              <Image style={{ width: 46 * 2.5, height: 98 * 2.5 }} source={require('../assets/images/4/3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Manage Lab</Text></View>
            <View level={15}><Text style={styles.description}>Delete, Edit, And Comfirm Your Slot</Text></View>
          </View>
        </View>
      </AppIntro>
    );
  }
}


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 40
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
});

Intro.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Intro);