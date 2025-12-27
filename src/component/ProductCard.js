import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../context/CartContext';
import styles from '../styles/productCardStyles';

export default function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      nama: item.nama,
      harga: item.harga,
      image: item.image,
      berat: item.berat,
      jenis: item.jenis,
    });
  };

  return (
    <View style={styles.card}>

      {/* FAVORITE */}
      <TouchableOpacity style={styles.heartIcon}>
        <Text style={{ fontSize: 16 }}>♡</Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />

      {/* INFO */}
      <Text style={styles.name} numberOfLines={1}>
        {item.nama}
      </Text>
      <Text style={styles.weight}>
        {item.berat}
      </Text>

      {/* PRICE + CART */}
      <View style={styles.bottomRow}>
        <Text style={styles.price}>
          Rp. {item.harga.toLocaleString()}
        </Text>

        {/* 🔥 TOMBOL TAMBAH KE KERANJANG */}
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Image
            source={require('../../assets/images/carticons.png')}
            style={styles.cartIcon}
          />
          <Text style={styles.cartButtonText}>
            tambah
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
