import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainScreen from './src/screens/MainScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
