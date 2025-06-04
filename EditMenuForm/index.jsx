import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const EditMenuForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [form, setForm] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
  });

  const getMenuById = async () => {
    try {
      const res = await axios.get(`https://mockapi.io/projects/683d0781199a0039e9e3fe65${id}`);
      setForm(res.data);
    } catch (error) {
      console.error('Fetch menu error:', error);
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`https://mockapi.io/projects/683d0781199a0039e9e3fe65${id}`, form);
      navigation.goBack();
    } catch (error) {
      console.error('Update menu error:', error);
    }
  };

  useEffect(() => {
    getMenuById();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'} Edit Menu</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: form.image || 'https://placehold.co/600x300?text=Add+Image+URL',
        }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Title *"
        value={form.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category *"
        value={form.category}
        onChangeText={(text) => handleChange('category', text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Content/Description *"
        value={form.content}
        onChangeText={(text) => handleChange('content', text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL *"
        value={form.image}
        onChangeText={(text) => handleChange('image', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Update Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditMenuForm;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  backText: { fontSize: 16, color: '#8e44ad', marginBottom: 16 },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#8e44ad',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
