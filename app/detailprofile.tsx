import { Feather as Icon } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetailProfileScreen() {

  const renderRow = (label: string, value: string) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/profile')}>
          <Icon name="arrow-left" size={22} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Saya</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar} />
        <View style={styles.cameraIcon}>
          <Icon name="camera" size={14} color="#FFF" />
        </View>
      </View>

      {/* Info Profil */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Info Profil</Text>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="edit-2" size={16} color="#2E7D32" />
              <Text style={styles.editText}> Ubah</Text>
            </View>
          </TouchableOpacity>

        </View>

        {renderRow('Nama', 'Anisa Nur')}
        {renderRow('Nomor Telepon', '09867689340')}
        {renderRow('Email', 'anisa@example.com')}
        {renderRow('Alamat', 'Jl. Puspa Mekar No.21, Sukabumi')}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: -30,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEE',
  },

  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: '38%',
    backgroundColor: '#FFA000',
    padding: 4,
    borderRadius: 12,
  },

  card: {
    backgroundColor: '#FFF',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  cardTitle: {
    fontWeight: '600',
    fontSize: 14,
  },

  editText: {
    color: '#2E7D32',
    fontSize: 13,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#EEE',
  },

  label: {
    color: '#777',
    fontSize: 13,
  },

  value: {
    color: '#333',
    fontSize: 13,
    maxWidth: '60%',
    textAlign: 'right',
  },
});
