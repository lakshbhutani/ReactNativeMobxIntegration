import React, {Component} from 'react';
import { Alert ,Image ,Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import UserInput  from './UserInput';
import SubmitButton from './SubmitButton';
import {getMoviesFromApi,loginDataValue} from '../settings/Utility';
import {authenticateUser} from '../settings/ApiUrls';
import { AsyncStorage } from "react-native";

export default class SignIn extends Component {
    static navigationOptions = {
       title: 'Sign In',
    };
    state = {
      name:'',
      password:''
    };
    
    loginUser = async(email,password) => {
      try {
        let response = await fetch(authenticateUser, {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password
        })});
        let responseJson = await response.json();
        if(responseJson.success){
          console.log(responseJson);
          let tokenValue = "";
          console.log("Token",responseJson.token);
          tokenValue = responseJson.token;
          // let storageData = {
          //   name: responseJson.data.name,
          //   email: responseJson.data.email,
          //   image : responseJson.data.image,
          //   token : responseJson.token,
          // }
          this._storeData(tokenValue);
          this.props.navigation.navigate('TabScreen')
          //  alert("logged In Successfully");
        }
        else {
           alert(responseJson.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
    _storeData = async (userInfo) => {
      try {
        console.log("setItem", userInfo);
        await AsyncStorage.setItem('userInfo', "laksh");
      } catch (error) {
        // Error saving data
      }
    }
    render() { 
    return (
      <View style= {styles.container}>
         <Image  style ={styles.welcome} source= {require('../assets/images/projectdesign.png')} />
         <View style={{marginTop:35}}>
            <UserInput  placeholder="EMAIL" Email = {(inputValue)=>{this.setState({email:inputValue})}} />
            <UserInput  placeholder="PASSWORD" Password = {(inputValue)=>{this.setState({password:inputValue})}}/>
         </View>
         <TouchableOpacity style={{marginTop:20}}  onPress={() => {
                    this.loginUser(this.state.email,this.state.password);
                           }}>
          <SubmitButton buttonText="Sign In" />
         </TouchableOpacity>
         <View style={{flex:1, justifyContent:'space-between'}}>
            <View>
                <Text style={styles.forgotLinkText}>Forgot your Details?</Text>              
            </View>
            <TouchableOpacity style = {styles.createNewAccountButton}
                              onPress={() => {
                              this.props.navigation.navigate('SignUpScreen')}}>
              <Text>
                Create a new Account
              </Text>
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
        width: 110,
        height: 110,
        borderRadius: 100,
        marginTop: 20,
        marginBottom:10,
        paddingBottom:10
    },
    forgotLinkText: {
      marginTop: 10
    },
    createNewAccountButton:{
      // marginTop: 'auto',
      marginBottom: 18
    }
  });
