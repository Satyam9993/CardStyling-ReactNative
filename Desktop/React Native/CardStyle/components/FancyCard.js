import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View >
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
            <Image 
                style={styles.cardImage}
                source={{
                    uri : "https://images.unsplash.com/photo-1676878912863-2849fe9fb18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                }}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Goa Trip</Text>
                <Text style={styles.cardLable}>A tour to the Ocean</Text>
                <Text style={styles.cardDescription}>
                    will be used on an iPhone 7, whilecheck@3x.png will be used on an iPhone 7 Plus or a Nexus 5. If there is no image matching the screen density, the closest best option will be selected.
                </Text>
                <Text style={styles.cardFooter}>Vist Once!!</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom : 5
    },
    card : {
        marginHorizontal : 12,
        marginVertical : 16,
        borderRadius : 6
    },
    cardElevated : {
        backgroundColor : "#FFFFFF",
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        }
    },
    cardImage : {
        height : 250,
        borderTopRightRadius : 6,
        borderTopLeftRadius : 6,
        marginBottom : 8,
    },
    cardBody: {
        flex : 1,
        flexGrow  :1,
        paddingHorizontal : 12
    },
    cardTitle: {
        color  : "#000000",
        fontSize : 22,
        fontWeight : "bold",
        marginBottom : 6
    },
    cardLable: {
        color  : "#000000",
        fontSize : 18,
        marginBottom : 6
    },
    cardDescription :{
        color  : "#242B2E",
        fontSize : 16,
        marginBottom : 12,
        marginTop  : 6,
        flexShrink : 1
    },
    cardFooter :{
        color  : "#758283",
        marginBottom : 12
    }
})