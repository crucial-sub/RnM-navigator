import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageAssets} from '../../assets/ImageAssets';

const DetailScreenOverlay = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={ImageAssets.whiteBackImage} style={styles.backImage} />
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreenOverlay;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    aspectRatio: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#0000004F',
    position: 'absolute',
  },
  backImage: {
    width: 30,
    height: 30,
    marginTop: 32,
    marginLeft: 20,
  },
});
