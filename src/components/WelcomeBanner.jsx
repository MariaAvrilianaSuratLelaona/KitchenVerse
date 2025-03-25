import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeBanner({ username }) {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Selamat Datang, {username}! 👋</Text>
      <Text style={styles.bannerSubtitle}>Temukan inspirasi resep favoritmu 🍲✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { backgroundColor: "#FCE7D5", padding: 20, borderRadius: 15, alignItems: "center",margin: 20,  marginBottom: 10,marginTop: -5, },
  bannerText: { fontSize: 22, fontWeight: "bold", color: "#BF5F3B" },
  bannerSubtitle: { fontSize: 14, color: "#A35B38", textAlign: "center", marginTop: 15 },
});
