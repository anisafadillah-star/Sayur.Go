import { CartContext } from "@/src/context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const { cart } = useContext(CartContext) || { cart: [] };
  const cartCount = cart?.length || 0;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* BAR ATAS: AKUN + CART */}
        <View style={styles.headerTop}>
          <Text style={styles.account}>Akun</Text>

          <TouchableOpacity
            onPress={() => router.push("/cart")}
            style={styles.headerIcon}>
            <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* INFO USER + ARROW */}
        <View style={styles.userInfoRow}>
          <View style={styles.userInfo}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
              }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.name}>Anisa Nur</Text>
              <Text style={styles.phone}>09867869340</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              try {
                console.log(
                  "attempting router.push with pathname /detailprofile"
                );
                router.push({ pathname: "/detailprofile" });
              } catch (err) {
                console.warn("router.push failed", err);
                // Fallback: navigate by setting window.location (web only)
                if (typeof window !== "undefined") {
                  console.log("fallback: window.location -> /detailprofile");
                  window.location.href = "/detailprofile";
                }
              }
            }}
          >
            <Ionicons name="chevron-forward" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produk Favorit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#2E7D32",
    padding: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
  },

  account: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: -15,
  },
  headerIcon: {
    marginTop: -10,
    position: "relative",
  },

  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FFA500",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  headerIconText: {
    fontSize: 22,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#FFF",
  },

  name: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
  },

  phone: {
    color: "#E0E0E0",
    fontSize: 12,
  },

  section: {
    backgroundColor: "#FFF",
    margin: 16,
    padding: 14,
    borderRadius: 12,
  },

  sectionTitle: {
    fontWeight: "600",
    fontSize: 14,
  },
});
