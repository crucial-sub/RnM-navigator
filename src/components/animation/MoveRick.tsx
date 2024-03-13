import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import RickImage from '../../assets/images/rick.svg';

const DEFAULT_LEFT_VALUE = 0;

const MoveRick = () => {
  const leftValue = useSharedValue<number>(DEFAULT_LEFT_VALUE);
  const [rickMoveValue, setRickMoveValue] = React.useState('0');
  const handleMoveValue = (num: string) => {
    setRickMoveValue(num);
  };
  const moveAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: leftValue.value,
    };
  });
  const moveRick = (num: string) => {
    leftValue.value = withTiming(isNaN(Number(num)) ? 0 : parseInt(num));
    setRickMoveValue('0');
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.controlBoxWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleMoveValue}
          value={rickMoveValue}
          placeholder="0"
          placeholderTextColor={'#000000'}
        />
        <TouchableOpacity
          style={styles.moveButton}
          onPress={() => moveRick(rickMoveValue)}>
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderBox}>
        <Animated.View style={[styles.imageBox, moveAnimatedStyle]}>
          <RickImage width={50} height={50} />
        </Animated.View>
      </View>
    </View>
  );
};

export default MoveRick;

const styles = StyleSheet.create({
  itemWrapper: {gap: 10},
  controlBoxWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    width: 63,
    borderRadius: 4,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  moveButton: {
    backgroundColor: '#8CD790',
    borderRadius: 4,
    width: 64,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  borderBox: {
    height: 80,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
  },
  imageBox: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
