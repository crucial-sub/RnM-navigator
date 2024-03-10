import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import RickIcon from '../assets/images/rick.svg';

const DEFAULT_LEFT_VALUE = 0;

const LocationsScreen = () => {
  const leftValue = useSharedValue<number>(DEFAULT_LEFT_VALUE);
  const [rickValue, setRickValue] = React.useState('0');
  const handleValue = (num: string) => {
    setRickValue(num);
  };

  const moveAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: leftValue.value,
    };
  });

  const moveRick = (value: string) => {
    leftValue.value = withTiming(parseInt(value));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.header}>Learn Animation</Text>
        </View>
        <View style={styles.rickWrapper}>
          <View style={styles.controlBoxWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleValue}
              value={rickValue}></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() => moveRick(rickValue)}>
              <Text>Move</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rickBox}>
            <RickIcon />
            {/* <Animated.Image
              source={}
              style={[styles.rickImage, moveAnimatedStyle]}
            /> */}
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
  rickWrapper: {gap: 10},
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
  button: {
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
  },
  rickBox: {
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
});
