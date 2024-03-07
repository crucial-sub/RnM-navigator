import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import EpisodeIcon from '../assets/images/episode.svg';
import HomeIcon from '../assets/images/home.svg';
import LocationIcon from '../assets/images/location.svg';
import SettingIcon from '../assets/images/setting.svg';
import EpisodesScreen from '../screens/EpisodesScreen';
import LocationsScreen from '../screens/LocationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStackNavigator from './HomeStackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#C1C1C1',
        tabBarInactiveTintColor: '#C1C1C1C1',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLaber,
      }}
      initialRouteName="Home">
      <BottomTab.Screen
        name="HomeStackNav"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <HomeIcon stroke={focused ? '#C1C1C1' : '#C1C1C1C1'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: ({focused}) => (
            <LocationIcon stroke={focused ? '#C1C1C1' : '#C1C1C1C1'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: ({focused}) => (
            <EpisodeIcon stroke={focused ? '#C1C1C1' : '#C1C1C1C1'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => (
            <SettingIcon stroke={focused ? '#C1C1C1' : '#C1C1C1C1'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#141414',
    borderTopColor: '#212121',
  },
  tabBarLaber: {
    fontSize: 10,
    fontWeight: '500',
  },
  tabBarIcon: {
    width: 25,
    height: 25,
  },
});
