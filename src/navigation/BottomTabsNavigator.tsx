import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ImageAssets} from '../assets/ImageAssets';
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
        tabBarActiveTintColor: '#FFFFFF',
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
          tabBarIcon: () => (
            <Image source={ImageAssets.homeImage} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: () => (
            <Image
              source={ImageAssets.locationImage}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: () => (
            <Image
              source={ImageAssets.episodeImage}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Image
              source={ImageAssets.settingImage}
              style={styles.tabBarIcon}
            />
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
