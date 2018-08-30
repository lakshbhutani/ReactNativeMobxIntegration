
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
// import SignIn from './src/components/SignIn';
import Routing from './src/Routing';
// import SignUp from './src/components/SignUp';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};


export default class App extends Component {
  render() {
    return (
          <Routing/>
    );
      // <View style={styles.container}>
        // <Header headerTitle= {'Sign In'} />
        {/* <SignIn /> */}
        // <Routing><Routing/>
        
        {/* <SignUp /> */}
      {/* </View> */}
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
