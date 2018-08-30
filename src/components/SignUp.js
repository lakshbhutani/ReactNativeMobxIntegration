import React, {Component} from 'react';
import { StyleSheet, View ,Text, TouchableOpacity} from 'react-native';
import UserInput  from './UserInput';
import SubmitButton from './SubmitButton';
// import { AsyncStorage } from "react-native"

export default class SignUp extends Component {
    static navigationOptions = {
          title: 'Sign Up',
    };
    state = {
      name : '',
      email: '',
      invalidEmail: false,
      password: '',
      invalidPassword: false
    }
    render() {
    return (
      <View style= {styles.container}>
         <View style={{marginTop: "auto",marginBottom:'auto'}}>
            <UserInput  placeholder="Name" 
                        name={(inputValue)=>{ this.setState({name: inputValue})}}/>
            <Text></Text>
            <UserInput  placeholder="Email" 
                        email={(inputValue)=>{ 
                          const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                          if(!(emailReg.test(inputValue))){
                            this.setState({invalidEmail:true});
                          }
                          else {
                            this.setState({invalidEmail:false});
                            this.setState({email: inputValue})
                          }
                        }}/>
            <Text>{this.state.invalidEmail ? "Invalid Email":<Text></Text>}</Text>
            <UserInput  placeholder="Password" 
                        password={(inputValue)=>{ 
                          const passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
                          if(!(passwordReg.test(inputValue))){
                            this.setState({invalidPassword:true});
                          }
                          else {
                            this.setState({invalidPassword:false});
                            this.setState({password: inputValue})}}
                          }                          
                          />
            <Text>{this.state.invalidPassword ? "Invalid Password":<Text></Text>}</Text>
            <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Home', {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                  })}}>
                <SubmitButton  buttonText="Sign Up" />
                </TouchableOpacity>            
         </View>
           
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    welcome: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 15,
    },
    forgotLinkText: {
      marginTop: 10
    }
  });