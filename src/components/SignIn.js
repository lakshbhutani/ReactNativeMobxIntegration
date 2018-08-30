import React, {Component} from 'react';
import { Alert ,Image ,Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import UserInput  from './UserInput';
import SubmitButton from './SubmitButton';
import {getMoviesFromApi,loginDataValue} from '../settings/Utility';
import {authenticateUser} from '../settings/ApiUrls';

export default class SignIn extends Component {
    static navigationOptions = {
       title: 'Sign In',
    };
    state = {
      name:'',
      password:''
    };
    
    loginUser = async() => {
      try {
        let response = await fetch(authenticateUser, {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJoYXNrYXJqNjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkdS9Ld3FuVERFbXhzSUFrZEI5QVJiLlVwQnEzZEppVGRWUmo5MFVHbUwvYTJQSy5yRUpQZ0ciLCJpYXQiOjE1MzU2MTY1MjMsImV4cCI6MTUzNTcwMjkyM30.j391j74Mz6ZHVtdNs2jK7OLwJsSQzWqIDYH4QKrazyY'
          },
          body: JSON.stringify({
            email: "bhaskarj61@gmail.com",
            password: "test1234"
        })});
        let responseJson = await response.json();
        this.loginDataResponse = JSON.stringify(responseJson.data);
        // return responseJson.data;
      } catch (error) {
        console.error(error);
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
            if(this.props.navigation.state.params.email===this.state.email && this.props.navigation.state.params.password===this.state.password){
                              this.props.navigation.navigate('TabScreen');
                            }else{
                              Alert.alert('Wrong Email or Password');
                            }
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
