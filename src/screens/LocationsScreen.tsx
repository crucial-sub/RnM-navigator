import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const LocationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.header}>Learn Animation</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button1}>
            <Text style={{color: '#FFFFFF', fontSize: 12}}>stretch</Text>
          </TouchableOpacity>

          <View style={styles.button2} />
        </View>
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
  buttonWrapper: {
    gap: 20,
  },
  button1: {
    backgroundColor: '#8CD790',
    borderRadius: 4,
    width: 64,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#85BFE9',
    width: 73,
    height: 49,
    borderRadius: 8,
  },
});
