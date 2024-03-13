import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import BumpRickAndMorty from '../components/animation/BumpRickAndMorty';
import HorizontalMoveRick from '../components/animation/HorizontalMoveRick';
import MoveRick from '../components/animation/MoveRick';
import RotateMorty from '../components/animation/RotateMorty';
import VerticalMoveMorty from '../components/animation/VerticalMoveMorty';

const LocationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.header}>Learn Animation</Text>
        </View>
        <MoveRick />
        <RotateMorty />
        <BumpRickAndMorty />
        <HorizontalMoveRick />
        <VerticalMoveMorty />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  contentContainer: {gap: 40},
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
});
