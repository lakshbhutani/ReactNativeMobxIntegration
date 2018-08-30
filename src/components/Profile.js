import React, {Component} from 'react';
import { StyleSheet, View, Text,Image,TextInput, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';


export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.imageStyle}>
                 <Image  style ={styles.welcome} source= {require('../assets/images/59.jpg')} />
            </View>
            <View style={styles.detailsStyles}>
            <TextInput
                    style={styles.textInputStyles}
                    value="Jennifier Lopez"
                    editable = {false}
                />
             <TextInput
                    style={styles.textInputStyles}
                    value="jennifier@gmail.com"
                    editable = {false}
                 />
             <TextInput
                    style={styles.textInputStyles}
                    value="9467999902"
                    editable = {false}
                />
            </View>
            <View>
            <TouchableOpacity style={{marginTop:20}}>
                <SubmitButton  buttonText="Save" />
            </TouchableOpacity>
            </View>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    welcome:{
        borderRadius: 100
    },
    textInputStyles: {
        height : 50,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 35,
        width: 300
    },
    imageStyle: {
        marginTop: 25,
        paddingTop:20
    },
    detailsStyles: {
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20,
    }
  });