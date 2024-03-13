import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MortyImage from '../assets/images/morty.svg';
import RickImage from '../assets/images/rick.svg';
import SearchIcon from '../assets/images/search.svg';

const HEADERTITLE = 'Rick and Morty';

const HomeHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.imageWrapper}>
          {Math.floor(Math.random() * 10) + 1 > 5 ? (
            <MortyImage width={30} height={30} />
          ) : (
            <RickImage width={30} height={30} />
          )}
        </View>
        <Text style={styles.titleText}>{HEADERTITLE}</Text>
      </View>
      <TouchableOpacity>
        <SearchIcon />
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
  titleText: {color: 'white', fontWeight: '800', fontSize: 16},
  searchImage: {
    width: 24,
    height: 24,
  },
});
