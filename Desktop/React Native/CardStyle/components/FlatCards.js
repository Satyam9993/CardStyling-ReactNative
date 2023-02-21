import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  headingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 10
  },
  container:{
    flex : 1,
    flexDirection : 'row',
    padding : 8
  },
  card:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    width : 100,
    height : 100,
    borderRadius : 4,
    margin : 10
  },
  cardone:{
    backgroundColor : '#EF5354'
  },
  cardtwo:{
    backgroundColor : '#fcba03'
  },
  cardthree:{
    backgroundColor : '#1703fc'
  }
})