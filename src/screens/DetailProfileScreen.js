import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { detailProfileStyles as styles } from '../styles/detailProfilestyle';
import Icon from 'react-native-vector-icons/Feather';

export default function DetailProfileScreen() {

  const renderRow = (label, value) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={22} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Saya</Text>
      </View>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatar} />
        <View style={styles.cameraIcon}>
          <Icon name="camera" size={14} color="#FFF" />
        </View>
      </View>

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
