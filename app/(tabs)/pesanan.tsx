import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PesananScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                    <Ionicons name="arrow-back" size={20} color="#fff" />
                </TouchableOpacity>

                {/* BAR ATAS: AKUN + CART */}
                <View style={styles.headerTop}>
                    <Text style={styles.pesanan}>Riwayat Pesanan</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    header: {
        backgroundColor: '#2E7D32',
        padding: 10,
    },

    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 9,
        marginLeft: 30,
    },

    headerIcon: {
        marginTop: 3,
        marginRight: 90,
    },


    pesanan: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '500',
        marginTop: -20,
        
    },

    headerIconText: {
        fontSize: 30,
    },


});

