import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = websiteLink => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={4}>
            The following section only applies to projects with native code
            exposed. If you are using the managed Expo workflow, see the guide
            on Linking in the Expo documentation for the appropriate
            alternative.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://portfolio-frontend-gamma-mocha.vercel.app/v/satyam',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://portfolio-frontend-gamma-mocha.vercel.app/v/satyam',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#03203C',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardImage: {
    height: 200
  },
  cardBody: {
    padding : 10
  },
  cardFooter: {
    padding : 10,
    flexDirection  : 'row',
    alignItems : 'center',
    justifyContent : 'space-evenly',
  },
  socialLinks: {
    fontSize : 16,
    fontWeight : 'bold',
    color : '#0D0D0D',
    backgroundColor : '#CAD5E2',
    paddingHorizontal : 20,
    paddingVertical : 6,
    borderRadius : 6
  },
});
