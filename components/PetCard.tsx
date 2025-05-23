import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '@/constants/theme';

interface PetCardProps {
  nome: string;
  tipo: string;
  raca: string;
  idade: string;
  imagem: string;
}

export default function PetCard({ nome, tipo, raca, idade, imagem }: PetCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.tipo}>{tipo}</Text>
        <View style={styles.detalhes}>
          <Text style={styles.raca}>{raca}</Text>
          <Text style={styles.separador}>•</Text>
          <Text style={styles.idade}>{idade}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    ...typography.subtitle2,
    marginBottom: 2,
  },
  tipo: {
    ...typography.body2,
    color: colors.primary,
    marginBottom: 4,
  },
  detalhes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  raca: {
    ...typography.caption,
    color: colors.gray[600],
  },
  separador: {
    ...typography.caption,
    color: colors.gray[600],
    marginHorizontal: 4,
  },
  idade: {
    ...typography.caption,
    color: colors.gray[600],
  },
});