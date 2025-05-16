import React from 'react';
import Home from './src/screens/Home/Index';
import DiscoverScreen from './src/screens/Discover/Index';
import BookmarkScreen from './src/screens/Bookmark/Index';
import ProfileScreen from './src/screens/Profile/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#E87E5A',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#FFF' },
          tabBarIcon: ({ color }) => {
            let emoji;

            if (route.name === 'Home') {
              emoji = '🏠';
            } else if (route.name === 'Discover') {
              emoji = '🔍';
            } else if (route.name === 'Bookmark') {
              emoji = '🔖';
            } else if (route.name === 'Profile') {
              emoji = '👤';
            }

            return <Text style={{ fontSize: 20, color }}>{emoji}</Text>;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
