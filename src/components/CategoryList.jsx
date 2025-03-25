import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryList({ categories, onSelectCategory }) {
  return (
    <View style={styles.categoryGrid}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => onSelectCategory(category)}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginHorizontal: 20 },
  categoryItem: { backgroundColor: "#F7D8C5", padding: 12, borderRadius: 12, width: "45%", alignItems: "center", marginBottom: 10 },
  categoryText: { fontSize: 14, fontWeight: "bold", color: "#8B4F36" },
});
