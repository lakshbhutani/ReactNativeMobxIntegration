import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Card from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from './Profile';
import Settings from './Settings';


export const TabBars = createBottomTabNavigator({
    ListingScreen: {
      screen: Card,
      navigationOptions: {
        title: 'Listing',
        tabBarLabel: 'Listing',
        tabBarIcon: ({ tintColor }) => (<Icon name="playlist-play" size={30} color={tintColor} />)
      }
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="verified-user"
                color={tintColor}
                size={32}
            />
        )
     })
    },
    SettingsScreen: {
      screen: Settings,
      navigationOptions : {
          title: 'Settings'
      },
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="settings"
                color={tintColor}
                size={32}
            />
        )
     })
    }
  });
export default class TabbedNavigation extends Component {
    static navigationOptions =  {
        title: 'MyScreen',
        header: null,
        // headerLeft: null,
        gesturesEnabled: false
    }
    render() {
      return (
        <TabBars/>
      );
    }
  }