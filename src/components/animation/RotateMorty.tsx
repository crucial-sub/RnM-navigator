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
import MortyImage from '../../assets/images/morty.svg';

const DEFAULT_DEGREE = '0';

const RotateMorty = () => {
  const degree = useSharedValue<string>(DEFAULT_DEGREE);
  const [mortyRotateValue, setMortyRotateValue] = React.useState('0');
  const handleRotateValue = (degree: string) => {
    setMortyRotateValue(degree);
  };
  const rotateAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${degree.value}deg`}],
    };
  });

  const rotateMorty = (deg: string) => {
    degree.value = withTiming(isNaN(Number(deg)) ? '0' : deg, {duration: 1500});
    setMortyRotateValue('0');
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.controlBoxWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleRotateValue}
          value={mortyRotateValue}
          placeholder="0"
          placeholderTextColor={'#000000'}
        />
        <TouchableOpacity
          style={styles.rotateButton}
          onPress={() => rotateMorty(mortyRotateValue)}>
          <Text style={styles.buttonText}>Rotate</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Animated.View style={[styles.imageBox, rotateAnimatedStyle]}>
          <MortyImage width={50} height={50} />
        </Animated.View>
      </View>
    </View>
  );
};

export default RotateMorty;

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
  rotateButton: {
    backgroundColor: '#85BFE9',
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
  imageBox: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
