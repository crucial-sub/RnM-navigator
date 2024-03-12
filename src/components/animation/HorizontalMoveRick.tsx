import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import RickImage from '../../assets/images/rick.svg';

const DEFAULT_VALUE = 0;
const IMAGESIZE = 64;

const HorizontalMoveRick = () => {
  const positionValue = useSharedValue(DEFAULT_VALUE);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const handleSwitch = () => {
    setIsSwitchOn(prev => !prev);
    positionValue.value = withTiming(isSwitchOn ? 0 : 100, {
      duration: 1000,
    });
  };
  const horizontalMoveAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: `${positionValue.value}%`,
      transform: [{translateX: (-IMAGESIZE * positionValue.value) / 100}],
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
        <Animated.View
          style={[styles.rickImageBox, horizontalMoveAnimatedStyle]}>
          <RickImage width={50} height={50} />
        </Animated.View>
      </View>
    </View>
  );
};

export default HorizontalMoveRick;

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
});
