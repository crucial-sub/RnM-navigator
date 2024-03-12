import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MortyImage from '../../assets/images/morty.svg';
import RickImage from '../../assets/images/rick.svg';

const DEFAULT_VALUE = 0;
const IMAGESIZE = 64;

const BumpRickAndMorty = () => {
  const positionValue = useSharedValue(DEFAULT_VALUE);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const handleSwitch = () => {
    setIsSwitchOn(prev => !prev);
    positionValue.value = withTiming(isSwitchOn ? 0 : 1, {
      duration: 1000,
    });
  };
  const bumpAnimatedStyle = (direction: string) =>
    useAnimatedStyle(() => {
      const position = interpolate(positionValue.value, [0, 1], [0, 50]);
      return direction === 'left'
        ? {
            left: `${position}%`,
            transform: [{translateX: (-IMAGESIZE * 2 * position) / 100}],
          }
        : {
            right: `${position}%`,
            transform: [{translateX: (IMAGESIZE * 2 * position) / 100}],
          };
    });
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.controlBoxWrapper}>
        <Switch
          value={isSwitchOn}
          onValueChange={handleSwitch}
          trackColor={{false: '#ECECEC', true: '#81b0ff'}}
          ios_backgroundColor="#ECECEC"
          thumbColor={isSwitchOn ? '#f5dd4b' : '#FFFFFF'}
        />
      </View>
      <View style={styles.rowBorderBox}>
        <Animated.View style={[styles.rickImageBox, bumpAnimatedStyle('left')]}>
          <RickImage width={50} height={50} />
        </Animated.View>
        <Animated.View
          style={[styles.mortyImageBox, bumpAnimatedStyle('right')]}>
          <MortyImage width={50} height={50} />
        </Animated.View>
      </View>
    </View>
  );
};

export default BumpRickAndMorty;

const styles = StyleSheet.create({
  itemWrapper: {gap: 10},
  controlBoxWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  rowBorderBox: {
    flexDirection: 'row',
    height: 80,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    alignItems: 'center',
  },
  rickImageBox: {
    position: 'absolute',
    width: IMAGESIZE,
    height: IMAGESIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  mortyImageBox: {
    position: 'absolute',
    width: IMAGESIZE,
    height: IMAGESIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});
