import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const bookmarkedRecipes = [
  {
    id: 1,
    title: 'Nasi Goreng Spesial',
    image: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang-500x300.jpg',
  },
  {
    id: 2,
    title: 'Kue Coklat',
    image: 'https://cdn.rri.co.id/berita/Bukittinggi/o/1718411694221-1000090927/xgqllpl8ydpck84.jpeg',
  },
  {
    id: 3,
    title: 'Sushi',
    image: 'https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=1920',
  },

];

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.pageTitle}>Bookmark</Text>

        <View style={styles.listCard}>
          {bookmarkedRecipes.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EC',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});
