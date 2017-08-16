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
import * as Progress from 'react-native-progress';
import appStyles from '../assets/style/Styles';
import { Button, FormLabel, FormInput  } from 'react-native-elements';

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


class EditProfileScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {...this.props.user},
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
        this.setState({ isLoading: true });
    }

    render() {
      const { fullName, regNo, email } = this.state.user;
        return (
            <View style={appStyles.bookLabPane}>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text>Edit Profile</Text>
                        <FormLabel>Full Name</FormLabel>
                        <FormInput value={fullName} onChangeText={(text) => this.setState({ user: { ...this.state.user, fullName: text } })} />
                        <FormLabel>Student Number</FormLabel>
                        <FormInput value={regNo} onChangeText={(text) => this.setState({ user: { ...this.state.user, regNo: text } })} />

                        <FormLabel>Email Address</FormLabel>
                        <FormInput value={email} onChangeText={(text) => this.setState({ user: { ...this.state.user, email: text } })} />


                        <FormLabel>Pass Key</FormLabel>
                        <FormInput onChangeText={(text) => this.setState({ user: { ...this.state.user, password: text } })} />

                        {!this.state.isLoading &&
                            <Button
                                raised
                                icon={{ name: 'edit', size: 18 }}
                                buttonStyle={{ backgroundColor: '#1e3c72', borderRadius: 10 }}
                                textStyle={{ textAlign: 'center' }}
                                title={`Edit Profile`}
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

EditProfileScreen.navigationOptions = {
    title: 'Edit Profile',
    headerStyle: { backgroundColor: '#1e3c72' },
    headerTitleStyle: { color: '#ffffff' },
    headerBackTitleStyle: { backgroundColor: '#fff', tintColor: '#fff' },
    headerTintColor: '#fff'
}

EditProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(EditProfileScreen);
