import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import EpisodesScreen from '../screens/EpisodesScreen';
import LocationsScreen from '../screens/LocationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStackNavigator from './HomeStackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <BottomTab.Screen
        name="HomeStackNav"
        component={HomeStackNavigator}
        options={{tabBarLabel: 'Home'}}
      />
      <BottomTab.Screen name="Locations" component={LocationsScreen} />
      <BottomTab.Screen name="Episodes" component={EpisodesScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;
