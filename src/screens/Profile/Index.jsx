    import React from 'react';
    import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

    export default function ProfileScreen() {
    return (
        <View style={styles.container}>
        {/* Background atas */}
        <View style={styles.headerBackground} />

        {/* Isi konten */}
        <ScrollView contentContainerStyle={styles.content}>
            {/* Foto Profil */}
            <View style={styles.profileSection}>
            <Image
                source={{ uri: 'https://i.pinimg.com/736x/67/e2/af/67e2af3958e1b2849d3aa516a35eb4ab.jpg' }}
                style={styles.profileImage}
            />
            <Text style={styles.username}>Piril</Text>
            <Text style={styles.viewProfile}>View full profile</Text>
            </View>

            {/* Menu */}
            <View style={styles.menuSection}>
            <MenuItem label="Account Information" />
            <MenuItem label="Password" />
            <MenuItem label="Settings" />
            <MenuItem label="Help & Support" />
            </View>

            {/* Logout */}
            <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
    }

    const MenuItem = ({ label }) => {
    return (
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
        <Text style={styles.menuLabel}>{label}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6EC', // KitchenVerse background
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 260,
        backgroundColor: '#FFA07A', // KitchenVerse accent color
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    content: {
        paddingTop: 100,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    viewProfile: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    menuSection: {
        marginTop: 10,
    },
    menuItem: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 12,
        elevation: 2, // shadow android
        shadowColor: '#000', // shadow iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    menuLabel: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#FF4C4C', // Merah lebih pekat
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    logoutText: {
        fontSize: 16,
        color: '#fff', // Tulisan putih
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    });

