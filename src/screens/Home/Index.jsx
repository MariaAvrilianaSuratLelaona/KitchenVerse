import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import WelcomeBanner from '../../components/WelcomeBanner';
import SearchBar from '../../components/SearchBar';
import CategoryList from '../../components/CategoryList';
import RecipeList from '../../components/RecipeList';
import PopUpModal from '../../components/PopUpModal';

const categorySuggestions = {
  'Sarapan': ['🍳 Omelet', '🥪 Roti Bakar', '🍚 Nasi Goreng', '🥣 Bubur Ayam'],
  'Makan Siang': ['🍛 Nasi Padang', '🍗 Ayam Bakar', '🍝 Spaghetti'],
  // Tambahkan kategori lainnya sesuai kebutuhan
};

const recipeDetails = {
  '🍳 Omelet': 'Bahan: Telur, garam, merica, susu, bawang.\nLangkah:\n1. Kocok telur dan bahan lain.\n2. Panaskan teflon.\n3. Masak hingga matang.',
  '🍕 Pizza': 'Bahan: Tepung, ragi, saus tomat, keju, topping.\nLangkah:\n1. Buat adonan.\n2. Tambahkan topping.\n3. Panggang 15-20 menit.',
  // Tambahkan detail resep lainnya sesuai kebutuhan
};

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleCategorySelect = (category) => {
    const suggestions = categorySuggestions[category] || ['Tidak ada rekomendasi'];
    setModalTitle(`Rekomendasi untuk ${category}`);
    setModalContent(suggestions.join('\n'));
    setModalVisible(true);
  };

  const handleRecipeSelect = (recipe) => {
    const detail = recipeDetails[recipe] || 'Detail resep belum tersedia.';
    setModalTitle(`Resep ${recipe}`);
    setModalContent(detail);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <WelcomeBanner username="Piril" />
          <SearchBar onSearchChange={setSearchQuery} />
          <CategoryList
            categories={[
              'Sarapan',
              'Makan Siang',
              'Makan Malam',
              'Dessert',
              'Vegetarian',
              'Seafood',
              'Cepat Saji',
              'Gorengan',
            ]}
            onSelectCategory={handleCategorySelect}
          />
          <RecipeList
            recipes={[
              '🍳 Omelet',
              '🍕 Pizza',
              '🍔 Burger',
              '🍣 Sushi',
              '🍝 Spaghetti',
            ]}
            onSelectRecipe={handleRecipeSelect}
          />
        </Animated.View>
      </ScrollView>
      <PopUpModal
        visible={modalVisible}
        title={modalTitle}
        content={modalContent}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDF6EC' },
});
