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
import DatePicker from 'react-native-datepicker';
import * as Progress from 'react-native-progress';
import appStyles from '../assets/style/Styles';
import { Button, Divider } from 'react-native-elements';
import { getAllLabs, getAllLabPurposes, bookLab } from '../actions/bookingActions';

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

    this.state = {
      booking: {
        studentId: this.props.user.id, purposeId: 0, labId: 0, time: '10AM-12PM', date: '2017-05-04'
      },
      labs: this.props.labs,
      purposes: this.props.purposes,
      isLoading: false,
    };

    this.render = this.render.bind(this);
    this.onLabValueChanged = this.onLabValueChanged.bind(this);
    this.onPurposeValueChanged = this.onPurposeValueChanged.bind(this);
    this.onTimeValueChanged = this.onTimeValueChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
  }

  componentDidMount() {
    this.props.getAllLabs();
    this.props.getAllLabPurposes();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ labs: nextProps.labs, purposes: nextProps.purposes });
  }

  onLabValueChanged(itemIndex, itemValue) {
    const booking = this.state.booking;
    booking['labId'] = itemIndex;
    this.setState({ booking });
  }

  onPurposeValueChanged(itemIndex, itemValue) {
    const booking = this.state.booking;
    booking['purposeId'] = itemIndex;
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
    console.log(this.state.booking);
    this.setState({ isLoading: true });
    this.props.bookLab(this.state.booking)
      .then(() => {
        this.setState({ isLoading: false });
        Alert.alert('Booking Submitted', 'Check your booking list to see the status');
        this.props.navigation.dispatch({ type: 'AppScreen' });
      });
  }

  render() {
    const { labs, purposes } = this.state;
    return (
      <View style={appStyles.bookLabPane}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 10 }}>
          <View style={{ flex: 1 }}>
            <Text>Book Lab</Text>
            <Text style={inputStyle.inputLabel}>
              Select Lab
            </Text>

            <Picker
              selectedValue={this.state.booking.labId}
              onValueChange={this.onLabValueChanged}
              style={{ color: '#1e3c72' }}
            >
              <Picker.Item label="Select" value="0" />
              {labs.map((lab, index) => {
                return (
                  <Picker.Item label={lab.name} value={lab.id} key={`${index}_lab`} />
                );
              })}
            </Picker>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={inputStyle.inputLabel}>
              Select Purpose
            </Text>

            <Picker
              selectedValue={this.state.booking.purposeId}
              onValueChange={this.onPurposeValueChanged}
              style={{ color: '#1e3c72' }}
            >
              <Picker.Item label="Select" value="0" />
              {purposes.map((purpose, index) => {
                return (
                  <Picker.Item label={purpose.name} value={purpose.id} key={`${purpose.id}_purpose`} />
                );
              })}
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
              <Picker.Item label="10AM-12PM" value="10AM-12PM" />
              <Picker.Item label="12PM-2PM" value="12PM-2PM" />
              <Picker.Item label="2PM-4PM" value="2PM-4PM" />
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
            {!this.state.isLoading &&
              <Button
                raised
                icon={{ name: 'event-seat', size: 18 }}
                buttonStyle={{ backgroundColor: '#1e3c72', borderRadius: 10 }}
                textStyle={{ textAlign: 'center' }}
                title={`Book Lab`}
                style={{ marginTop: 10 }}
                onPress={this.submitBooking}
              />
            }
            {this.state.isLoading &&
              <Progress.Bar indeterminate width={250} />
            }
            <Popup ref={popup => this.popup = popup} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

BookLab.navigationOptions = {
  title: 'Book Lab',
  headerStyle: { backgroundColor: '#1e3c72' },
  headerTitleStyle: { color: '#ffffff' },
  headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
  headerTintColor: '#fff'
}

BookLab.propTypes = {
  navigation: PropTypes.object.isRequired,
  labs: PropTypes.array.isRequired,
  purposes: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  getAllLabs: PropTypes.func.isRequired,
  getAllLabPurposes: PropTypes.func.isRequired,
  bookLab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  labs: state.booking.labs,
  purposes: state.booking.purposes,
});

export default connect(mapStateToProps, {
  getAllLabs,
  getAllLabPurposes,
  bookLab
})(BookLab);
