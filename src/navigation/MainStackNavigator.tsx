import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabsNavigator from './BottomTabsNavigator';

const MainStack = createStackNavigator();

export type RootStackParamList = {
  CharacterDetail: {id: number} | undefined;
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="BottomTabsNav" component={BottomTabsNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
