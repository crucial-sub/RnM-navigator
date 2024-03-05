import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomeHeader from '../components/HomeHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
});
