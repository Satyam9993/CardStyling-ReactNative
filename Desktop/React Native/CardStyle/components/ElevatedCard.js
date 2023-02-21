import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 4,
  },
  cardElevated: {
    backgroundColor: '#cdcbd1',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
});
