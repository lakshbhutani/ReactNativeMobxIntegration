import { createStackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import React, {Component} from 'react';
import SignUp from './components/SignUp';
import Card from './components/Card';
import TabbedNavigation from './components/TabbedNavigation';


export const RootStack = createStackNavigator(
    {
      // Home: SignIn,
      Home: TabbedNavigation,
      SignUpScreen: SignUp,
      ListingScreen: Card,
      TabScreen: TabbedNavigation
    },
    {
      initialRouteName: 'Home'
    }
  );
  export default class Routing extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  