import React, { Component } from 'react';
import { Text, View, ScrollView, Linking, Image, StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const feedData = [
    {
      key: 1,
      name: 'Nathan Anderson',
      lastSeen: '5',
      location: 'New York',
      uri: { uri: 'https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448_960_720.jpg' },
      imageUrl: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg'}
    },
    {
      key: 2,
      name: 'Jameson McDonald',
      lastSeen: '3',
      location: 'Seattle',
      uri: { uri: 'https://cdn.pixabay.com/photo/2015/05/18/23/53/norway-772991_960_720.jpg' },
      imageUrl: { uri: 'data:image/jpeg;base64,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'}

    },
    {
      key: 3,
      name: 'Alberto Restifo',
      lastSeen: '23',
      location: 'Las Vegas',
      uri: { uri: 'https://cdn.pixabay.com/photo/2016/06/11/19/34/new-zealand-1450672__340.jpg' },
      imageUrl: { uri: 'data:image/jpeg;base64,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'}

    },
    {
      key: 4,   
      name: 'John Towner',
      lastSeen: '25',
      location: 'Leicester',
      uri: { uri: 'https://cdn.pixabay.com/photo/2013/03/19/18/23/utah-95032__340.jpg' },
      imageUrl: { uri: 'data:image/jpeg;base64,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'}

    },
    {
      key: 5,
      name: 'John Towner',
      lastSeen: '29',
      location: 'China',
      uri: { uri: 'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389__340.jpg' },
      imageUrl: { uri: 'https://randomuser.me/api/portraits/women/55.jpg'}

    },
    {
      key: 6,
      name: 'John Towner',
      lastSeen: '38',
      location: 'Norway',
      uri: { uri: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg' },
      imageUrl: { uri: 'https://randomuser.me/api/portraits/men/47.jpg'}

    },
    {
      key: 7,
      name: 'John Chandler',
      lastSeen: '57',
      location: 'Scotland',
      uri: { uri: 'https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_960_720.jpg' },
      imageUrl: { uri: 'https://randomuser.me/api/portraits/men/33.jpg'}

    }
  ];

  export default class Card extends Component {
    // static navigationOptions = {
    //     title: 'List'
    // }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                    <FlatList
                        data={feedData}
                        renderItem={({ item })=>(
                        <View>
                            <View style={styles.cardHeader}>
                                <Image style={styles.cardImage} source={item.imageUrl} />
                                <Text style={styles.cardText}>{item.name}{"\n"}@Instagram</Text>
                                <Text style={styles.cardHeaderDetails}>{item.lastSeen} minutes ago{"\n"}in {item.location}</Text>
                                <Icon name='location-on' style={styles.locationIcon} />
                            </View>
                            <Image style={styles.cardBodyImage} source={item.uri} />
                            <View style={styles.cardFooter}>
                                <Text style={styles.cardBodyText}>This Park is favourite among skaters in California and it definitely deserves it.
                                The Park is complete with plenty of smooth banks to.</Text>
                                <Icon name='arrow-forward' style={styles.arrowIcon} />
                            </View>  
                        </View>
                    )}
                    />    
            </ScrollView>
        );
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
    scrollViewStyle:{
        paddingTop: 10,
        paddingBottom: 100
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
  });
