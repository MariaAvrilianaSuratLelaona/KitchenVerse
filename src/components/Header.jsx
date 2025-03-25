import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Element3 } from 'iconsax-react-native'; // Import ikon garis tiga

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Nama Aplikasi */}
      <Text style={styles.appName}>🍽️ KitchenVerse</Text>

      {/* Ikon Garis Tiga */}
      <TouchableOpacity style={styles.menuButton} onPress={() => alert("Menu dibuka!")}>
        <Element3 size="24" color="#8B4F36" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, // Geser ke kiri sedikit
    paddingVertical: 20,  // Menurunkan posisi Header
    backgroundColor: "#FDF6EC", // Warna sesuai tema
  },
  appName: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: "#E87E5A",
    marginLeft: 5, // Geser sedikit ke kiri
  },
  menuButton: {
    padding: 10, // Area sentuh lebih besar
  }
});

export default Header;
