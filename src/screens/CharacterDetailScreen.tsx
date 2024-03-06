import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CharacterDetail from '../components/characters/CharacterDetail';

const CharacterDetailScreen = ({route}: any) => {
  const {id} = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <CharacterDetail id={id} />
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
});
