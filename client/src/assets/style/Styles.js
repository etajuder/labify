import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    bodyPane: {
        flex: 1,
    },
    profilePane: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgba(0,0,0,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      elevation: 5
    },
    userProfile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    actionIcon: {
      color: '#fff',
      fontSize: 40
    },
    userProfileImage: {
      width: 80,
      height: 80 
    },
    userFullName: {
      color: '#fff',
      fontSize: 20,
    },
    appMenu: {
      flex: 2,
      flexDirection: 'column',
      alignItems: 'center'
    },
    appMenuHBox: {
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    menuAction: {
      borderRadius: 15,
      elevation: 2,
      backgroundColor: 'rgba(0,0,0,0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
      width: 100,
      height: 100,
    },
    bookLabPane: {
      flex: 1,
      padding: 20,
      justifyContent: 'center'
    },
    labInput: {
      width: 200,
      height: 50,
    }
});

export default Styles;
