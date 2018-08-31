import React, {Component} from 'react';
import { StyleSheet, View ,Text, TouchableOpacity,Alert} from 'react-native';
import UserInput  from './UserInput';
import SubmitButton from './SubmitButton';
// import { AsyncStorage } from "react-native"
import {createUser} from '../settings/ApiUrls';


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
    createUser = async(name,email,password) => {
      try {
        let response = await fetch(createUser, {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })});
        let responseJson = await response.json();
        console.log(responseJson);
        if(responseJson.success){
          Alert.alert(
            'User Registered Successfully!',
            'You will be redirected to Login screen.',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {console.log('OK Pressed');this.props.navigation.navigate('Home')}},
            ],
            { cancelable: false }
          )
        }
        else {
          alert(responseJson.message);
        }
      } catch (error) {
        console.error(error);
      }
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
              <Text style = {{color:'red',fontSize: 13}}>{this.state.invalidEmail ? "Invalid Email":<Text></Text>}</Text>
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
              <Text style = {{color:'red',fontSize: 13}}>{this.state.invalidPassword ? "Invalid Password":<Text></Text>}</Text>
              <TouchableOpacity onPress={() => this.createUser(this.state.name,this.state.email,this.state.password)}>
               <SubmitButton  buttonText="Sign Up" />
            </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Home', {
                      email: this.state.email,
                      password: this.state.password,
                      name: this.state.name
                    })}}>
                  <SubmitButton  buttonText="Sign Up" />
                  </TouchableOpacity>             */}
           </View>
             
        </View>
      );
    }
  
  //   render() {
  //   return (
  //     <View style= {styles.container}>
  //        <View style={{marginTop: "auto",marginBottom:'auto'}}>
  //           <UserInput  placeholder="Name" 
  //                       name={(inputValue)=>{ this.setState({name: inputValue})}}/>
  //           <Text></Text>
  //           <UserInput  placeholder="Email" 
  //                       email={(inputValue)=>{ 
  //                         const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //                         if(!(emailReg.test(inputValue))){
  //                           this.setState({invalidEmail:true});
  //                         }
  //                         else {
  //                           this.setState({invalidEmail:false});
  //                           this.setState({email: inputValue})
  //                         }
  //                       }}/>
  //           <Text>{this.state.invalidEmail ? "Invalid Email":<Text></Text>}</Text>
  //           <UserInput  placeholder="Password" 
  //                       password={(inputValue)=>{ 
  //                         const passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  //                         if(!(passwordReg.test(inputValue))){
  //                           this.setState({invalidPassword:true});
  //                         }
  //                         else {
  //                           this.setState({invalidPassword:false});
  //                           this.setState({password: inputValue})}}
  //                         }                          
  //                         />
  //           <Text>{this.state.invalidPassword ? "Invalid Password":<Text></Text>}</Text>
  //           <TouchableOpacity onPress={() => this.createUser(this.state.name,this.state.email,this.state.password)}>
  //               <SubmitButton  buttonText="Sign Up" />
  //           </TouchableOpacity>
  //           {/* <TouchableOpacity onPress={() => {
  //                 this.props.navigation.navigate('Home', {
  //                   email: this.state.email,
  //                   password: this.state.password,
  //                   name: this.state.name}
  //                 )}}>
  //               <SubmitButton  buttonText="Sign Up" />
  //           </TouchableOpacity>             */}
  //        </View>
           
  //     </View>
  //   );
  // }
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