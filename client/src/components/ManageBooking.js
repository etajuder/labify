import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { getStudentLabBooking, cancelBooking } from '../actions/bookingActions';

class ManageBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookings: [...this.props.bookings], purposes: [] };
  }

  componentDidMount() {
    this.props.getStudentLabBooking(this.props.user.id)
      .then(() => {
        this.setState({ isLoading: false })
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.bookings) {
      this.setState({ bookings: [...nextProps.bookings] });
    }
  }

  render() {
    const { bookings } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <List>
            {bookings.map((booking, index) => {
              return (
                <ListItem
                  key={`lab_${booking.labId}${Math.random() * (100 - 1) + 1}`}
                  roundAvatar
                  title={booking.lab}
                  subtitle={
                    <View style={styles.subtitleView}>

                      <Button
                        raised
                        icon={{ name: 'cancel' }}
                        title='Cancel Booking'
                        backgroundColor={'#ff0000'}
                        onPress={() => this.props.cancelBooking(booking)}
                        />
                    </View>
                  }
                  avatar={<Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                  />}
                />
              );
            })}

          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})


ManageBooking.navigationOptions = {
  title: 'Manage Bookings',
  headerStyle: { backgroundColor: '#1e3c72' },
  headerTitleStyle: { color: '#ffffff' },
  headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
  headerTintColor: '#fff'
}

ManageBooking.propTypes = {
  navigation: PropTypes.object.isRequired,
  bookings: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  cancelBooking: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  bookings: state.booking.bookings,
  user: state.auth.user,
});
export default connect(mapStateToProps, { getStudentLabBooking, cancelBooking })(ManageBooking);