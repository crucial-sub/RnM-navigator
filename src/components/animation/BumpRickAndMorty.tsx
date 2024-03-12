import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Animated, {
  Easing,
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
    positionValue.value = withTiming(isSwitchOn ? 0 : 50, {
      duration: 1000,
      easing: Easing.bounce,
    });
  };
  const leftPositionStyle = useAnimatedStyle(() => {
    return {
      left: `${positionValue.value}%`,
      transform: [{translateX: (-IMAGESIZE * 2 * positionValue.value) / 100}],
    };
  });
  const rightPositionStyle = useAnimatedStyle(() => {
    return {
      right: `${positionValue.value}%`,
      transform: [{translateX: (IMAGESIZE * 2 * positionValue.value) / 100}],
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
        <Animated.View style={[styles.rickImageBox, leftPositionStyle]}>
          <RickImage width={50} height={50} />
        </Animated.View>
        <Animated.View style={[styles.mortyImageBox, rightPositionStyle]}>
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
