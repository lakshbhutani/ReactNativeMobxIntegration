import React, {Component} from 'react';
import { Button, StyleSheet, View, Text,Image,TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import SubmitButton from './SubmitButton';
import ImagePicker from "react-native-image-picker";
import {uploadUserImage} from '../settings/ApiUrls';
import { inject, observer } from 'mobx-react';


@inject('authStore')
@observer

export default class Profile extends Component {
    profileUserName = '';
    imagePickerOptions = {
        title: 'Select Avatar',
        customButtons: [
          {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
    static navigationOptions = {
        title: 'Profile'
    }
    constructor(props){
        super(props)
        this.state = {
            pickedImage: {uri: 'http://192.168.12.39:7000/laksh@gmail.com.jpeg'},
            // name: ''
        }
        this.retrieveStorageData();
        this.profileUserName  = this.props.authStore.userName;
        // console.log("Inside Profile",this.props.authStore.userName)
        // this.setState({userName: this.props.authStore.userName});
    }
    pickImageHandler = () => {
        console.log(ImagePicker);
        ImagePicker.showImagePicker(this.imagePickerOptions, res => {
          if (res.didCancel) {
            console.log("User cancelled!");
          } else if (res.error) {
            console.log("Error", res.error);
          } 
          else {
                let source = {uri:'data:image/jpeg;base64,'+ res.data} ;
                this.setState({
                    pickedImage: source
                });
          }
        });
    }
    token = '';
    userEmail = '';
    retrieveStorageData = async () => {
        console.log('Inside retrieve storage');
        try {
            console.log('inside Try');
            const value = await AsyncStorage.getItem('userInfo');
            const valueObject = JSON.parse(value);
            console.log(valueObject);
            this.token = valueObject.token;
            this.userEmail = valueObject.email;
            let userImage = {uri:"http://192.168.12.39:7000/"+valueObject.image};
            this.setState({pickedImage: userImage})
            console.log("Value object",valueObject);
        }
        catch (error) {
                console.log('error');
        }
    }
    updateImage = async() => {
        console.log('hello')
        console.log(this.token,this.userEmail);
        console.log(this.state.pickedImage.uri);
            try {
              let response = await fetch(uploadUserImage, {
                method: 'POST',
                headers: {
                'x-access-token': this.token,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.userEmail,
                    image : this.state.pickedImage.uri
                })
            });
            }
            catch (error) {
              console.error(error);
            }
    }
    render() {
        console.log("My state",this.state);
        console.log()
        return (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.imageStyle}>
                 <Image  style ={styles.welcome} 
                         source= {this.state.pickedImage} />
            </View>
            <View>
                <Button title="Pick Image" onPress={this.pickImageHandler} />
            </View>
            <View style={styles.detailsStyles}>
            <TextInput
                    style={styles.textInputStyles}
                    value = { this.props.authStore.userName }
                    onChangeText = { (value) => this.props.authStore.updateName(value) }
                    editable = {true}
                />
             <TextInput
                    style={styles.textInputStyles}
                    value={this.props.authStore.userInfo.email}
                    editable = {false}
                 />
             <TextInput
                    style={styles.textInputStyles}
                    value="9467999902"
                    editable = {false}
                />
            </View>
            <View>
            <TouchableOpacity   style={{marginTop:20}}
                                onPress={() => {
                                    this.updateImage();
                                    // this.props.authStore.loginUser(this.state.email,this.state.password);
                                    }} >
                <SubmitButton  buttonText="Save" />
            </TouchableOpacity>
            </View>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    welcome:{
        borderRadius: 100,
        height: 120,
        width: 120
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