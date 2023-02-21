import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

export default function ContactList() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: 'Satyam Katiyar',
      status: 'Making the world Bright and beautiful!!',
      imageUrl:
        'https://images.pexels.com/photos/1449664/pexels-photo-1449664.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Satyam Katiyar',
      status: 'Making the world Bright and beautiful!!',
      imageUrl:
        'https://images.pexels.com/photos/1449664/pexels-photo-1449664.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Satyam Katiyar',
      status: 'Making the world Bright and beautiful!!',
      imageUrl:
        'https://images.pexels.com/photos/1449664/pexels-photo-1449664.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]);
  return (
    <View>
        <Text style={styles.heading}>Contact List</Text>
        <ScrollView style={styles.container} scrollEnabled={false}>
            {contactList.map((contact)=>(
                <View key={contact.id} style={styles.userCard}>
                    <Image 
                    source={{uri : contact.imageUrl}}
                    style={styles.userCardImage}
                    />
                    <View style={styles.userBody}>
                    <Text style={styles.userName}>{contact.name}</Text>
                    <Text style={styles.userStatus}>{contact.status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    heading:{
        fontSize : 24,
        fontWeight  : 'bold',
        marginHorizontal : 10
    },
    container : {
        // backgroundColor : '#FFFFFF'
    },
    userCard : {
        paddingHorizontal  : 16,
        margin : 5,
        flex: 1,
        flexDirection :'row',
        alignItems  : 'center',
    },
    userCardImage:{
        height : 60,
        width : 60,
        borderRadius : 30,
        marginRight : 8
    },
    userBody:{
        padding : 10
    },
    userName : {
        color  : '#FFF',
        fontSize  : 16,
        fontWeight : 'bold'
    },
    userStatus :{
        fontSize : 14
    }
});
