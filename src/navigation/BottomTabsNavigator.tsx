import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LocationsScreen from '../screens/LocationsScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Locations" component={LocationsScreen} />
      <BottomTab.Screen name="Episodes" component={EpisodesScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;
