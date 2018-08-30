import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, Switch} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Slider } from 'react-native-elements'


export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings'
    }
    state = {
        switch1Value: false,
        switch2Value: true,
        accountInfoRadioButtonChecked: false,
        newsLetterRadioButtonChecked: false,
        sliderValue: 50,
    };
    render() {
        return (
          <View style={styles.settingsContainer}>
            <View style={styles.listItem}>
                <Text style={styles.settingItem}>Mobile Data</Text>
                <View>
                    <Switch 
                        onValueChange={ (value) => {
                            this.setState({switch2Value:!value})
                            this.setState({switch1Value: value})}} 
                        value={ this.state.switch1Value } />
                </View>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.settingItem}>Wi-Fi</Text>
                <View>
                    <Switch 
                        onValueChange={ (value) =>{ 
                            this.setState({switch1Value:!value})
                            this.setState({switch2Value: value})}} 
                        value={ this.state.switch2Value } />
                </View>
            </View>
            <Text style={styles.headingStyle}>Notifications</Text>
            <View>
                <CheckBox
                     title='Account Info'
                     containerStyle={styles.checkbox}
                     checkedIcon='dot-circle-o' 
                     uncheckedIcon='circle-o'
                     checked={this.state.accountInfoRadioButtonChecked}
                     onPress={() => this.setState({accountInfoRadioButtonChecked: !this.state.accountInfoRadioButtonChecked})}
                    />
            </View>
            <View>
                <CheckBox
                     title='Newsletter' 
                     containerStyle={styles.checkbox}
                     checkedIcon='dot-circle-o' 
                     uncheckedIcon='circle-o'
                     checked={this.state.newsLetterRadioButtonChecked}
                     onPress = {()=> this.setState({newsLetterRadioButtonChecked: !this.state.newsLetterRadioButtonChecked})}
                    />
            </View>
            <Text style={styles.headingStyle}>Brightness</Text>
            <View style={styles.sliderStyles}>
                <Slider
                    step= {5}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor= '#4161D2'
                    thumbTintColor='cyan'
                    value={this.state.sliderValue}
                    onValueChange={(value) => this.setState({sliderValue:value})} />
                <Text>Value: {this.state.sliderValue}</Text>
            </View>     
          </View>
        );
      }
}
const styles = StyleSheet.create({
   settingsContainer:{
    flex: 1, 
   },
   listItem:{
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingTop:17,
    paddingBottom: 15,
    paddingRight:15,
    paddingLeft:15,
    backgroundColor:'#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#E6E8EA'
   },
   settingItem:{
       paddingTop:4
   },
   headingStyle: {
       fontSize: 16,
       paddingTop:7,
       paddingBottom:7,
       paddingLeft:15,
       paddingRight:15,
       fontWeight:'bold',
       color: '#000'
   },
   checkbox :{
       marginBottom: 0,
       marginTop:0,
       marginLeft:0,
       marginRight:0,
       paddingTop:16,
       paddingBottom:15,
       paddingLeft: 10,
       paddingRight: 10
   },
   sliderStyles:{
        paddingTop:10,
        paddingBottom: 10,
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:'#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#E6E8EA',
        justifyContent:'center',
   }
});