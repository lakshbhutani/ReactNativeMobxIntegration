import React, {Component} from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';


export default class SubmitButton extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.props=this.props;
    }
    render() {
        return (    
            
                <ImageBackground style={styles.textInputStyles} source={require('../assets/images/orange.png')}>
                     <Text style={styles.buttonTextStyles}>{this.props.buttonText}</Text>
                </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    textInputStyles: {
        padding: 15,
        width: 300
    },
    buttonTextStyles: {
        color: '#fff',
        textAlign:'center'
    }
  });