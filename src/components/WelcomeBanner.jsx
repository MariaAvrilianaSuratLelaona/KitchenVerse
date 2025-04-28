import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeBanner({ username }) {
  return (
    <View style={styles.banner}>
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/67/e2/af/67e2af3958e1b2849d3aa516a35eb4ab.jpg' }} 
        style={styles.bannerImage} 
      />
      <Text style={styles.bannerText}>Selamat Datang, {username}! 👋</Text>
      <Text style={styles.bannerSubtitle}>Temukan inspirasi resep favoritmu 🍲✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { 
    backgroundColor: "#FCE7D5", 
    padding: 20, 
    borderRadius: 15, 
    alignItems: "center",
    margin: 20,  
    marginBottom: 10,
    marginTop: -5, 
  },
  bannerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,  // Biar bulat, bisa dihapus kalau mau kotak
    marginBottom: 15,
  },
  bannerText: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#BF5F3B" 
  },
  bannerSubtitle: { 
    fontSize: 14, 
    color: "#A35B38", 
    textAlign: "center", 
    marginTop: 10 
  },
});
