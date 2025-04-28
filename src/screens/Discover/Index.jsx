import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

// Recent searches
const recentSearches = [
  { id: 1, label: 'Nasi Goreng' },
  { id: 2, label: 'Kue Cokelat' },
  { id: 3, label: 'Sushi' },
  { id: 4, label: 'Ayam Geprek' },
  { id: 5, label: 'Spaghetti' },
];

// Recent blog/articles
const recentBlogs = [
  { 
    id: 1, 
    title: '5 Tips Membuat Omelet Sempurna',
    image: 'https://cdn.hellosehat.com/wp-content/uploads/2018/06/resep-omelet.jpg?w=256&q=100' 
  },
  { 
    id: 2, 
    title: 'Resep Pizza Rumahan Anti Gagal',
    image: 'https://cdn1-production-images-kly.akamaized.net/k7ranhldHspQ8QLCTCHRREhvDwE=/0x281:4653x2903/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3049433/original/093267200_1581580862-shutterstock_294636281.jpg' 
  },
  { 
    id: 3, 
    title: 'Cara Cepat Membuat Sushi di Rumah',
    image: 'https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=1920' 
  },
  { 
    id: 4, 
    title: 'Burger Homemade dengan Daging Empuk',
    image: 'https://asset.kompas.com/crops/JFC1_i_OaGvcNEviEw4WKk-r3qQ=/12x51:892x637/750x500/data/photo/2022/03/05/622358ed771fb.jpg' 
  },
  { 
    id: 5, 
    title: 'Rahasia Membuat Spaghetti Carbonara',
    image: 'https://i.pinimg.com/736x/04/cc/36/04cc3677a177c1bd0077793ffa1f1c56.jpg' 
  },
];

const ItemRecent = ({ item }) => (
  <View style={stylesRecent.button}>
    <Text style={stylesRecent.label}>{item.label}</Text>
  </View>
);

const FlatListRecent = () => {
  const renderItem = ({ item }) => <ItemRecent item={item} />;

  return (
    <FlatList
      data={recentSearches}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <SearchBar onSearchChange={setSearchQuery} />

        <View style={{ paddingHorizontal: 24, paddingVertical: 10 }}>
          <Text style={styles.sectionTitle}>Recent Search</Text>
          <FlatListRecent />
        </View>

        <View style={styles.listCard}>
          {recentBlogs.map((item) => (
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
  container: { flex: 1, backgroundColor: '#FDF6EC' },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingTop: 10,
    gap: 10,
  },
  card: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

const stylesRecent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: '#DDD',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
  },
  label: {
    fontSize: 12,
    color: '#666666',
  },
});
