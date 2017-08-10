import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PricingCard, ListItem, List, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudentLabBooking } from '../actions/bookingActions';


class ViewLabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookings: [], isLoading: false };
  }

  componentDidMount() {
   this.props.getStudentLabBooking(this.props.user.id)
     .then(() => {
       this.setState({ isLoading: false })
     });
  }
  render() {
    const { bookings } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {bookings.map((booking, index) => {
            return (
              <PricingCard
            color='#b33a3a'
            title='Chemistry Lab'
            price='10PM - 12PM'
            info={['3 Students', '25-30-2017']}
            button={{ title: 'Pending', icon: 'av-timer' }}
          />
            );
          })}

        </ScrollView>
      </View>
    );
  }
}



ViewLabs.navigationOptions = {
  title: 'My Bookings',
  headerStyle: { backgroundColor: '#1e3c72' },
  headerTitleStyle: { color: '#ffffff' },
  headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
  headerTintColor: '#fff'
}

ViewLabs.propTypes = {
  bookings: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  bookings: state.booking.bookings,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getStudentLabBooking })(ViewLabs);
