import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MortyImage from '../../assets/images/morty.svg';

const DEFAULT_VALUE = 0;
const IMAGESIZE = 64;

const VerticalMoveMorty = () => {
  const positionValue = useSharedValue(DEFAULT_VALUE);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const handleSwitch = () => {
    setIsSwitchOn(prev => !prev);
    positionValue.value = withTiming(isSwitchOn ? 0 : 100, {
      duration: 1000,
    });
  };
  const verticalMoveAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: `${positionValue.value}%`,
      transform: [
        {translateY: (-IMAGESIZE * positionValue.value) / 100},
        {translateX: -IMAGESIZE / 2},
      ],
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
      <View style={styles.colBorderBox}>
        <Animated.View
          style={[styles.mortyImageBox, verticalMoveAnimatedStyle]}>
          <MortyImage width={50} height={50} />
        </Animated.View>
      </View>
    </View>
  );
};

export default VerticalMoveMorty;

const styles = StyleSheet.create({
  itemWrapper: {gap: 10},
  controlBoxWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  colBorderBox: {
    flexDirection: 'row',
    height: 250,
    width: 80,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    alignItems: 'center',
  },
  mortyImageBox: {
    position: 'absolute',
    width: IMAGESIZE,
    height: IMAGESIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    left: '50%',
  },
});
