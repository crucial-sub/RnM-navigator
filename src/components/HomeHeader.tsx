import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ImageAssets} from '../assets/ImageAssets';

const HEADERTITLE = 'Rick and Morty';

const HomeHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={ImageAssets.rickImage} style={styles.titleImage} />
        </View>
        <Text style={styles.titleText}>{HEADERTITLE}</Text>
      </View>
      <TouchableOpacity>
        <Image source={ImageAssets.searchImage} style={styles.searchImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWrapper: {flexDirection: 'row', gap: 15, alignItems: 'center'},
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#8CD790',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: 30,
    height: 30,
  },
  titleText: {color: 'white', fontWeight: '800', fontSize: 16},
  searchImage: {
    width: 24,
    height: 24,
  },
});
