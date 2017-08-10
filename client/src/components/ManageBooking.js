import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, ListItem, Button, Icon } from 'react-native-elements';

class ManageBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookings: [], purposes: [] };
  }
  componentWillReceiveProps(nextProps) {
    Alert('New Props', nextProps);
  }
  componentDidMount() {
    console.log('I have mount o');
  }

  render() {
   return (
     <View style={{ flex: 1 }}>
       <ScrollView style={{ flex: 1 }}>
          <List>
            <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
             <ListItem
              roundAvatar
              title='Physics Lab'
              subtitle={
                <View style={styles.subtitleView}>

                  <Button
                    raised
                    icon={{ name: 'cancel' }}
                    title='Cancel Booking'
                    backgroundColor={'#ff0000'} />
                </View>
              }
              avatar={<Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />}
            />
          </List>
       </ScrollView>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
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
 dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});
export default connect(mapStateToProps)(ManageBooking);