import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RecipeList = ({ recipes, onSelectRecipe }) => {

  // Data mapping: nama resep ke link gambar
  const recipeImages = {
    "🍳 Omelet": "https://cdn.hellosehat.com/wp-content/uploads/2018/06/resep-omelet.jpg?w=256&q=100",
    "🍕 Pizza": "https://cdn1-production-images-kly.akamaized.net/k7ranhldHspQ8QLCTCHRREhvDwE=/0x281:4653x2903/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3049433/original/093267200_1581580862-shutterstock_294636281.jpg",
    "🍔 Burger": "https://asset.kompas.com/crops/JFC1_i_OaGvcNEviEw4WKk-r3qQ=/12x51:892x637/750x500/data/photo/2022/03/05/622358ed771fb.jpg",
    "🍣 Sushi": "https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=1920",
    "🍝 Spaghetti": "https://i.pinimg.com/736x/04/cc/36/04cc3677a177c1bd0077793ffa1f1c56.jpg",
  };

  return (
    <View style={styles.list}>
      {recipes.map((recipe, index) => (
        <View key={index} style={styles.card}>
          {/* Ambil gambar sesuai nama resep */}
          <Image source={{ uri: recipeImages[recipe] }} style={styles.image} />

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
    paddingHorizontal: 20
  },
  card: { 
    backgroundColor: "#FFF", 
    padding: 15, 
    borderRadius: 15, 
    alignItems: "center", 
    marginBottom: 20, 
    elevation: 3, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#8B4F36",
    textAlign: "center",
    marginBottom: 10,
  },
  button: { 
    backgroundColor: "#E87E5A", 
    paddingVertical: 8, 
    paddingHorizontal: 20, 
    borderRadius: 10, 
  },
  buttonText: { 
    color: "#FFF", 
    fontSize: 14, 
    fontWeight: "bold" 
  },
});

export default RecipeList;
