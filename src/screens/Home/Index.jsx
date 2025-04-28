import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import WelcomeBanner from '../../components/WelcomeBanner';
import SearchBar from '../../components/SearchBar';
import CategoryList from '../../components/CategoryList';
import RecipeList from '../../components/RecipeList';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <WelcomeBanner username="Piril" />
        <SearchBar onSearchChange={setSearchQuery} />
        <CategoryList 
          categories={[
            "Sarapan", "Makan Siang", "Makan Malam", 
            "Dessert", "Vegetarian", "Seafood", 
            "Cepat Saji", "Gorengan"
          ]}
          onSelectCategory={(category) => alert(`Pilih kategori: ${category}`)}
        />
        <RecipeList recipes={["🍳 Omelet", "🍕 Pizza","🍔 Burger", "🍣 Sushi", "🍝 Spaghetti"]} onSelectRecipe={(r) => alert(`Lihat Resep: ${r}`)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF6EC" },
});
