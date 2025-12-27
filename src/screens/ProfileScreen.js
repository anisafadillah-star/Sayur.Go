import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function ProfileScreen() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const cartCount = cart?.length || 0;
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER WITH CART ICON */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
        <TouchableOpacity
          onPress={() => router.push('/cart')}
          style={styles.headerIcon}
        >
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Anisa Nur</Text>
        <Text style={styles.email}>anisa@example.com</Text>

        <View style={styles.card}>
          <Text style={styles.infoTitle}>Alamat</Text>
          <Text style={styles.infoText}>Jl. Puspa Mekar No. 21, Sukabumi</Text>

          <Text style={styles.infoTitle}>Status Akun</Text>
          <Text style={styles.infoText}>Pembeli Aktif</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9db99fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    paddingTop: 30,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#2E7D32' },
  email: { color: '#666', marginBottom: 20 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    elevation: 3,
  },
  infoTitle: { fontWeight: 'bold', color: '#2E7D32', marginTop: 10 },
  infoText: { color: '#444' },
});
