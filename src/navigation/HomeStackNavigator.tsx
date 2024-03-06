import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        // initialParams={{params: {id: 11111}}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
