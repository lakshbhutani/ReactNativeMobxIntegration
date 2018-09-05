import React, {Component} from 'react';
import { Alert ,Image ,Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import UserInput  from './UserInput';
import SubmitButton from './SubmitButton';
import {getMoviesFromApi,loginDataValue} from '../settings/Utility';
import {authenticateUser} from '../settings/ApiUrls';
import { AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { loginUser,loginUserAction } from '../actions';

class SignIn extends Component {
    static navigationOptions = {
       title: 'Sign In',
    };
    state = {
      name:'',
      password:''
    };
    shouldComponentUpdate(nextProps, nextState){
      console.log("Next Props",nextProps);
      if(this.props.login.token){
         this.props.navigation.navigate('TabScreen');
      }
      console.log("Next State", nextState);
      return true;
    }
    // loginUser = async(email,password) => {
    //   try {
    //     let response = await fetch(authenticateUser, {
    //       method: 'POST',
    //       headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: email,
    //         password: password
    //     })
    //   });
    //     let responseJson = await response.json();
    //     if(responseJson.success){
    //       let storageData = {
    //         name: responseJson.data.name,
    //         email: responseJson.data.email,
    //         image : responseJson.data.image,
    //         token : responseJson.token,
    //       }
    //       this._storeData(JSON.stringify(storageData));
    //       this.props.navigation.navigate('TabScreen')
    //     }
    //     else {
    //        alert(responseJson.message);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // _storeData = async (userInfo) => {
    //   try {
    //     console.log("setItem", userInfo);
    //     await AsyncStorage.setItem('userInfo', userInfo);
    //   } catch (error) {
    //     // Error saving data
    //   }
    // }
    render() {
      console.log(this.props);
      return (
        <View style= {styles.container}>
          <Image  style ={styles.welcome} source= {require('../assets/images/projectdesign.png')} />
          <View style={{marginTop:35}}>
              <UserInput  placeholder="EMAIL" Email = {(inputValue)=>{this.setState({email:inputValue})}} />
              <UserInput  placeholder="PASSWORD" Password = {(inputValue)=>{this.setState({password:inputValue})}}/>
          </View>
          <TouchableOpacity style={{marginTop:20}}  
                            onPress={() => {
                              this.props.loginUser(this.state.email,this.state.password);
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

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}  

export default connect(mapStateToProps, {loginUser})(SignIn);