import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home/Index';
import DiscoverScreen from './src/screens/Discover/Index';
import BookmarkScreen from './src/screens/Bookmark/Index';
import ProfileScreen from './src/screens/Profile/Index';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home/>
    </SafeAreaView>
  );
}
