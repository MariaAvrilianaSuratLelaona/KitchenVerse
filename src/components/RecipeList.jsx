import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <View style={styles.list}>
      {recipes.map((recipe, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{recipe}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onSelectRecipe(recipe)}>
            <Text style={styles.buttonText}>Lihat Resep</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: { 
    marginTop: 10, 
    paddingHorizontal: 20 // Tambahkan padding kiri dan kanan agar tidak mepet
  },
  card: { 
    backgroundColor: "#FFF", 
    padding: 15, 
    borderRadius: 15, 
    alignItems: "center", 
    marginBottom: 10 
  },
  name: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#8B4F36" 
  },
  button: { 
    backgroundColor: "#E87E5A", 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    borderRadius: 10, 
    marginTop: 10 
  },
  buttonText: { 
    color: "#FFF", 
    fontSize: 14, 
    fontWeight: "bold" 
  },
});

export default RecipeList;
