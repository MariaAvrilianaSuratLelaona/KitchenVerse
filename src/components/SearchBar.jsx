import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchNormal } from 'iconsax-react-native';

export default function SearchBar({ onSearchChange }) {
  return (
    <View style={styles.searchContainer}>
      <SearchNormal size="20" color="#999" />
      <TextInput
        style={styles.searchInput}
        placeholder="Cari resep favoritmu..."
        onChangeText={onSearchChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFF", 
    padding: 10, 
    borderRadius: 10, 
    marginHorizontal: 20, 
    marginBottom: 15 
  },
  searchInput: { fontSize: 16, color: "#5A5A5A", marginLeft: 10, flex: 1 },
});
