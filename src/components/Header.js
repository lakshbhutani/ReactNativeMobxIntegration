// importing React Native Libraries

import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
   return (
    <View style={viewStyle}>
      {/* <Icon name='md-menu' style={customStyleSheet.hamburgerMenu} /> */}
        <Text style={textStyle}> {props.headerTitle}</Text>
      {/* <Icon name='md-globe' style={customStyleSheet.globeIconStyle } /> */}
    </View>
   );
};

const customStyleSheet = {
    viewStyle: {
      backgroundColor: '#fff',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textStyle: {
      fontSize: 20,
      color: '#000',
      marginLeft: 'auto',
      marginRight : 'auto'
    },
    globeIconStyle: {
      color: '#fff',
      fontSize: 30,
     
    },
    hamburgerMenu: {
      color: '#fff',
      fontSize: 30,
    }
  };
  const { textStyle,viewStyle } = customStyleSheet;


// Make the component available to other parts of the App
export default Header;
