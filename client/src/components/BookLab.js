import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'react-native-popup';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  Picker,
  Alert
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Sae } from 'react-native-textinput-effects';
import appStyles from '../assets/style/Styles';
import DatePicker from 'react-native-datepicker';
import { Button, Divider } from 'react-native-elements';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const inputStyle = StyleSheet.create({
  input: {
    width: (windowsWidth - 40),
    height: 50
  },
  inputLabel: {
    color: 'purple',
    marginTop: 10,
  }
});


class BookLab extends React.Component {

  constructor(props) {
    super(props);

    this.state = { booking: { userId: 1, purpose: '', lab: '', time: '', date: '2017-05-04' } };

    this.render = this.render.bind(this);
    this.onLabValueChanged = this.onLabValueChanged.bind(this);
    this.onPurposeValueChanged = this.onPurposeValueChanged.bind(this);
    this.onTimeValueChanged = this.onTimeValueChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.submitBooking = this.submitBooking.bind(this);

  }
  static navigationOptions = {
    title: 'Book Lab',
    headerStyle: { backgroundColor: '#1e3c72' },
    headerTitleStyle: { color: '#ffffff' },
    headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
    headerTintColor: '#fff'
  }

  onLabValueChanged(itemIndex, itemValue) {
    const booking = this.state.booking;
    booking['lab'] = itemIndex;
    this.setState({ booking });
  }

  onPurposeValueChanged(itemIndex, itemValue) {
    const booking = this.state.booking;
    booking['purpose'] = itemIndex;
    this.setState({ booking });
  }

  onTimeValueChanged(itemIndex, itemValue) {
    const booking = this.state.booking;
    booking['time'] = itemIndex;
    this.setState({ booking });
  }

  onDateChanged(date) {
    const booking = this.state.booking;
    booking['date'] = date;
    this.setState({ booking });
  }

  submitBooking() {
    Alert.alert('Booking Submitted', 'Check your booking list to see the status');
    this.props.navigation.dispatch({ type: 'AppScreen' });
  }

  render() {
    return (
      <View style={appStyles.bookLabPane}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 10 }}>
          <View style={{ flex: 1 }}>
            <Text>Book Lab</Text>
            <Text style={inputStyle.inputLabel}>
              Select Lab
            </Text>

            <Picker
              selectedValue={this.state.booking.lab}
              onValueChange={this.onLabValueChanged}
              style={{ color: '#1e3c72' }}
            >
              <Picker.Item label="Main Lab" value="main" />
              <Picker.Item label="Chemistry Lab" value="chemistry" />
            </Picker>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={inputStyle.inputLabel}>
              Select Purpose
            </Text>

            <Picker
              selectedValue={this.state.booking.purpose}
              onValueChange={this.onPurposeValueChanged}
              style={{ color: '#1e3c72' }}
            >
              <Picker.Item label="For my final year project" value="finalyear" />
              <Picker.Item label="Some other predefined purpose" value="somerubbishreason" />
            </Picker>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={inputStyle.inputLabel}>
              Select Time
            </Text>
            <Picker
              selectedValue={this.state.booking.time}
              onValueChange={this.onTimeValueChanged}
              style={{ color: '#1e3c72' }}
            >
              <Picker.Item label="10AM-12PM" value="10-12" />
              <Picker.Item label="12PM-2PM" value="12-2" />
              <Picker.Item label="2PM-4PM" value="2to4" />
            </Picker>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={inputStyle.inputLabel}>
              Select Visiting Date
            </Text>

            <DatePicker
              style={{ width: 200, marginBottom: 10 }}
              date={this.state.booking.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2019-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={this.onDateChanged}
            />
            <Divider style={{ backgroundColor: 'blue', marginBottom: 20 }} />
            <Button
              raised
              icon={{ name: 'home', size: 18 }}
              buttonStyle={{ backgroundColor: '#1e3c72', borderRadius: 10 }}
              textStyle={{ textAlign: 'center' }}
              title={`Book Lab`}
              style={{ marginTop: 10 }}
              onPress={this.submitBooking}
            />
            <Popup ref={popup => this.popup = popup} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

BookLab.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(BookLab);
