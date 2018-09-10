// import { fetchResource } from '../settings/Utility';
import NetworkOps from '../settings/Utility';
import React, { Component } from 'react';
import { Text, View, ScrollView,ActivityIndicator, Image, StyleSheet,FlatList,SearchBar,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getUserList} from '../settings/ApiUrls';
import { connect } from 'react-redux';
import { inject, observer } from 'mobx-react';


@inject('authStore')
@observer
 export default class Card extends Component {
    list = []
    networkOps = new NetworkOps();
    state = {
        userCheckList : [],
        isLoading: true,
        pageNumber: 1,
    };
    constructor(props){
        super(props);
        // this.getUserList(this.props.authStore.userInfo.token);
        // this.networkOps.getUsersList(this.props.authStore.userInfo.token);
        // this.getUserList();
        console.log(this.networkOps);
        this.networkOps.fetchResource(getUserList, {
            method : 'GET',
            headers : {
              "x-access-token" : this.props.authStore.userInfo.token
            }
          }).then(resp=> {
                this.setState({ userCheckList: resp.message.results,isLoading:false });});
    }
   
    renderHeader = () => {
        return (
            <View style= {styles.cardListingHeader}>
                <Text></Text>
                <Text style= {styles.headerContent}>User List</Text>
                <Text style ={styles.headerContent}>Laksh</Text>
            </View>
        )
      };
    render() {
        console.log(this.props);
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )      
        }
        else {
            return (
                    <FlatList
                            data={this.state.userCheckList}
                            onEndReachedThreshold = {0.7}
                            onEndReached={({ distanceFromEnd }) => {
                                this.setState({pageNumber: ++this.state.pageNumber})
                                this.networkOps.fetchResource(getUserList, {
                                            method : 'GET',
                                            headers : {
                                            "x-access-token" : this.props.authStore.userInfo.token
                                            }
                                        }).then(resp=> {
                                                this.setState({ userCheckList: resp.message.results,isLoading:false });});
                            }}
                            ListHeaderComponent={this.renderHeader}
                            renderItem={({ item })=>(
                            <View style={styles.listItemStyle}>
                                <View style={styles.cardHeader}>
                                    <Image style={styles.cardImage} 
                                    source={{uri:item.picture.medium}}/>
                                    <Text style={styles.cardText}>{item.name.first}{item.name.last}{"\n"}@Instagram</Text>
                                    <Text style={styles.cardHeaderDetails}>{item.lastSeen} minutes ago{"\n"}in {item.location.state}</Text>
                                    <Icon name='location-on' style={styles.locationIcon} />
                                </View>
                            </View>
                        )}
                    />
                        
            );
        }
        
    }
}
const styles = StyleSheet.create({
    cardHeader: {
        padding: 17,
        flexDirection: 'row',
    },
    cardImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    cardText: {
        marginLeft: 1,
        fontSize: 15,
        paddingLeft: 15
    },
    cardHeaderDetails: {
        marginLeft: 'auto'
    },
    locationIcon: {
      fontSize: 30,
      paddingRight: 0,
      marginRight: 0,
      marginLeft: 10,
      opacity: 0.8
    },
    cardBodyImage: {
        height: 200
    },
    cardBodyText: {
        flex: 0.85
    },
    cardFooter:{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 2,
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderBottomColor: '#E6E8EA'
    },
    scrollViewStyles:{
        paddingTop: 10,
        paddingBottom: 100,
        // marginBottom: 5
    },
    arrowIcon: {
        opacity: 0.4,
        flex: 0.1,
        fontSize: 35,
        marginTop: 5,
        marginLeft: 5,
        paddingLeft: 30,
    },
    icon: {
        width: 26,
        height: 26,
      },
    listItemStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 5,
        marginBottom :5,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        
    },
    cardListingHeader: {
        flexDirection : 'row',
        flex: 1,
        backgroundColor: '#E67263',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    headerContent:{
        color :'#fff',
        fontSize: 20
    }
  });

//   const mapStateToProps = (state) => {
//     // console.log(state);
//     return state;
//   }  
  
//   export default connect(mapStateToProps)(Card);