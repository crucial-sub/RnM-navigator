import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MortyImage from '../assets/images/morty.svg';
import RickImage from '../assets/images/rick.svg';

const DEFAULT_LEFT_VALUE = 0;
const DEFAULT_DEGREE = '0';

const LocationsScreen = () => {
  // move Rick
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

  // rotate Morty
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.header}>Learn Animation</Text>
        </View>
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
              <Text>Move</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderBox}>
            <RickImage />
          </View>
        </View>
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
              <Text>Rotate</Text>
            </TouchableOpacity>
          </View>
          <View>
            <MortyImage />
          </View>
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
  },
  borderBox: {
    height: 80,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
  },
  rickImage: {
    width: 64,
    height: 64,
  },
  mortyImage: {
    width: 50,
    height: 50,
    transform: [{rotate: `0deg`}],
  },
});
