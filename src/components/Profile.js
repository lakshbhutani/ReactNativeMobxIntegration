import React, {Component} from 'react';
import { Button, StyleSheet, View, Text,Image,TextInput, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';
import ImagePicker from "react-native-image-picker";
// import { Button } from 'react-native-elements';

export default class Profile extends Component {
    // ImagePicker = require('react-native-image-picker');
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
    state = {
        pickedImage: require('../assets/images/59.jpg')
    };
     
    pickImageHandler = () => {
        console.log(ImagePicker);
        ImagePicker.showImagePicker(this.imagePickerOptions, res => {
          if (res.didCancel) {
            console.log("User cancelled!");
          } else if (res.error) {
            console.log("Error", res.error);
          } else {
            console.log('Image chosen')  
            console.log(res);
            let source = { uri: res.uri };
            // console.log(source)
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + res.data };
            this.setState({
                pickedImage: source
            });
          }
        });
    }

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.imageStyle}>
                 <Image  style ={styles.welcome} 
                         source= {this.state.pickedImage} />
            </View>
            <View>
                <Button title="Pick Image" onPress={this.pickImageHandler} />
            </View>
            {/* <Button title="Pick Image" onPress={this.pickImageHandler} /> */}
            <View style={styles.detailsStyles}>
            <TextInput
                    style={styles.textInputStyles}
                    value="Jennifier Lopez"
                    editable = {false}
                />
             <TextInput
                    style={styles.textInputStyles}
                    value="jennifier@gmail.com"
                    editable = {false}
                 />
             <TextInput
                    style={styles.textInputStyles}
                    value="9467999902"
                    editable = {false}
                />
            </View>
            <View>
            <TouchableOpacity style={{marginTop:20}}>
                <SubmitButton  buttonText="Save" />
            </TouchableOpacity>
            </View>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    welcome:{
        borderRadius: 100
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