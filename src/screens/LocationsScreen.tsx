import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BumpRickAndMorty from '../components/animation/BumpRickAndMorty';
import HorizontalMoveRick from '../components/animation/HorizontalMoveRick';
import MoveRick from '../components/animation/MoveRick';
import RotateMorty from '../components/animation/RotateMorty';

const LocationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.header}>Learn Animation</Text>
        </View>
        <MoveRick />
        <RotateMorty />
        <BumpRickAndMorty />
        <HorizontalMoveRick />
      </View>
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
    gap: 40,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
});
