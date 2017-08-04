import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PricingCard, ListItem, List, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class ViewLabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookins: [] };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <PricingCard
            color='#b33a3a'
            title='Chemistry Lab'
            price='10PM - 12PM'
            info={['3 Students', '25-30-2017']}
            button={{ title: 'Pending', icon: 'av-timer' }}
          />
          <PricingCard
            color='#b33a3a'
            title='Physics Lab'
            price='10PM - 12PM'
            info={['3 Students', '25-30-2017']}
            button={{ title: 'Pending', icon: 'av-timer' }}
          />
          <PricingCard
            color='#89C057'
            title='Physics Lab'
            price='10PM - 12PM'
            info={['5 Students', '25-30-2017']}
            button={{ title: 'Confirmed', icon: 'av-timer' }}
          />
        </ScrollView>
      </View>
    );
  }
}



ViewLabs.navigationOptions = {
  title: 'View Bookings',
  headerStyle: { backgroundColor: '#1e3c72' },
  headerTitleStyle: { color: '#ffffff' },
  headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
  headerTintColor: '#fff'
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(ViewLabs);
