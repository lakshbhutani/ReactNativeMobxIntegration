
// import { observable } from 'mobx';
import { computed, observable, action } from 'mobx';
// import {authenticateUser} from '../settings/ApiUrls';
import { authenticateUser } from './../settings/ApiUrls';
import { AsyncStorage } from "react-native";



// let index = 0

class AuthStore {
  @observable userInfo = {};
  @observable userName = "";

  @action updateName(name){
    this.userName = name;
  }
  
  @action loginUser = async(email,password) => {
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
          this.updateName(storageData.name);
          this._storeData(JSON.stringify(storageData));
          // this.props.navigation.navigate('TabScreen');
          this.userInfo = storageData;
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
        // console.log("setItem", userInfo);
        await AsyncStorage.setItem('userInfo', userInfo);
      } catch (error) {
        // Error saving data
      }
    }

}  
  
export default AuthStore;
// const AuthStore = new AuthStore();