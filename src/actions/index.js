import { LOGIN_USER } from './types';
import { authenticateUser } from '../settings/ApiUrls'
import { AsyncStorage } from "react-native";
 
// loginUserAction

const loginUserAction = (userData) => {
    return {
        type: LOGIN_USER,
        payload : userData
    };
    
};


// Login User Function

export const loginUser = (email,password) => async(dispatch)=> {
    // console.log("Actions inside",this.props);
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
      })
    });
        let responseJson = await response.json();
        if(responseJson.success){
            let storageData = {
            name: responseJson.data.name,
            email: responseJson.data.email,
            image : responseJson.data.image,
            token : responseJson.token,
            }
            dispatch(loginUserAction(storageData));
            // this._storeData(JSON.stringify(storageData));
            // this.props.navigation.navigate('TabScreen');
        }
        else {
            alert(responseJson.message);
        }
    } catch (error) {
      console.error(error);
    }
  }

  //Store in Async storage

  // _storeData = async (userInfo) => {
  //   try {
  //     console.log("setItem", userInfo);
  //     await AsyncStorage.setItem('userInfo', userInfo);
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }