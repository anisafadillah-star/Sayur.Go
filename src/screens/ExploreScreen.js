import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BUAH_DATA } from '../data/BuahData';
import { BUMBU_DATA } from '../data/BumbuData';
import { SAYUR_DATA } from '../data/SayurData';


// Map product data to format with category
const products = [
  ...SAYUR_DATA.map(item => ({
    id: `sayur-${item.id}`,
    name: item.nama,
    price: `Rp ${item.harga.toLocaleString('id-ID')}`,
    image: item.image,
    category: 'Sayur',
  })),
  ...BUAH_DATA.map(item => ({
    id: `buah-${item.id}`,
    name: item.nama,
    price: `Rp ${item.harga.toLocaleString('id-ID')}`,
    image: item.image,
    category: 'Buah',
  })),
  ...BUMBU_DATA.map(item => ({
    id: `bumbu-${item.id}`,
    name: item.nama,
    price: `Rp ${item.harga.toLocaleString('id-ID')}`,
    image: item.image,
    category: 'Bumbu',
  })),
];

export default function ExploreScreen() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with search icon */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Cari Bahan Segar</Text>
          <Ionicons name="search" size={24} color="#2E7D32" style={{ marginLeft: 8 }} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari sayur, buah, sembako..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* ===== Ojek Advertisement ===== */}
        <View style={styles.ojekAdContainer}>
          <View style={styles.ojekAdContent}>
            <Text style={styles.ojekAdTitle}>Segarnya sampai rumah, ongkirnya 10Km !!</Text>
            <TouchableOpacity style={styles.ojekAdButton}>
              <Text style={styles.ojekAdButtonText}>Belanja Sekarang →</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/images/ojek.png')}
            style={styles.ojekAdImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Section */}
        <Text style={styles.sectionTitle}>Produk</Text>
        <View style={styles.productsContainer}>
          {filteredProducts.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <View style={styles.productImageContainer}>
                <Image source={item.image} style={styles.productImage} />
              </View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
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
    backgroundColor: '#FAFAFA',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },

  header: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#2E7D32',
  },

  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },

  searchInput: {
    backgroundColor: '#E8F5E9',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },

  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#2E7D32', 
    paddingHorizontal: 20, 
    marginTop: 16,
    marginBottom: 12,
  },

  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    width: '48%',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  productImageContainer: {
    width: 60,
    height: 60,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: { 
    width: 60, 
    height: 60,
    resizeMode: 'contain',
  },

  productName: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#333', 
    textAlign: 'center',
    marginBottom: 6,
  },

  productPrice: { 
    fontSize: 13, 
    color: '#2E7D32', 
    fontWeight: '700',
  },

  // Ojek Advertisement
  ojekAdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF3E0',
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  ojekAdContent: {
    flex: 1,
    marginRight: 10,
  },

  ojekAdTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    lineHeight: 20,
  },

  ojekAdButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  ojekAdButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },

  ojekAdImage: {
    width: 110,
    height: 90,
  },

  // Category styles
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    width: 86,
  },

  categoryCardActive: {
    borderWidth: 1,
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },

  categoryIcon: { width: 36, height: 36, marginBottom: 6 },
  categoryText: { fontSize: 12, color: '#388E3C' },
  categoryTextActive: { fontWeight: '700' },
});
