import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Text style={{color: 'white'}}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    gap: 40,
  },
});
