import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '@/constants/theme';

interface ServiceCardProps {
  nome: string;
  imagem: string;
}

export default function ServiceCard({ nome, imagem }: ServiceCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.overlay} />
      <Text style={styles.texto}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 120,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  texto: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: colors.white,
    ...typography.subtitle1,
    fontFamily: 'Poppins-SemiBold',
  },
});