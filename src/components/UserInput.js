import React, {Component} from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity} from 'react-native';


export default class UserInput extends Component {
    
    setInputValue = (text) => {
        console.log(text);
        if(this.props.placeholder==='Name'){
            this.props.name(text);
        }
        else if (this.props.placeholder==='Email'){
            this.props.email(text);
        }
        else if (this.props.placeholder==='Password'){
            this.props.password(text);
        }
        else if(this.props.placeholder==='PASSWORD'){
            this.props.Password(text)
        }
        else if(this.props.placeholder==='EMAIL'){
            this.props.Email(text);
        }
    }
    render() {
        return (    
            <TextInput 
                style={styles.textInputStyles}
                placeholder={this.props.placeholder}
                onChangeText={(text) =>  this.setInputValue(text)} />
        );
    }
}
const styles = StyleSheet.create({
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
    }
  });