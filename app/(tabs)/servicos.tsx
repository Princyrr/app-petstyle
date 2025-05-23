import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { Search, Filter, Star } from 'lucide-react-native';
import { colors, typography } from '@/constants/theme';

// Tipos de serviços
const categorias = [
  'Todos', 'Banho & Tosa', 'Veterinário', 'Pet Sitter', 'Adestramento', 'Pet Shop'
];

// Dados simulados de serviços
const servicos = [
  {
    id: '1',
    nome: 'PetStyle Studio',
    tipo: 'Banho & Tosa',
    avaliacao: 4.8,
    avaliacoes: 128,
    preco: 'R$ 60,00',
    imagem: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg',
    distancia: '1.2 km'
  },
  {
    id: '2',
    nome: 'Dr. Pet Veterinária',
    tipo: 'Veterinário',
    avaliacao: 4.9,
    avaliacoes: 210,
    preco: 'R$ 150,00',
    imagem: 'https://images.pexels.com/photos/6235936/pexels-photo-6235936.jpeg',
    distancia: '2.5 km'
  },
  {
    id: '3',
    nome: 'Pet Center',
    tipo: 'Pet Shop',
    avaliacao: 4.6,
    avaliacoes: 95,
    preco: 'R$ 40,00',
    imagem: 'https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg',
    distancia: '3.1 km'
  },
  {
    id: '4',
    nome: 'Amigo Fiel',
    tipo: 'Adestramento',
    avaliacao: 4.7,
    avaliacoes: 76,
    preco: 'R$ 120,00',
    imagem: 'https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg',
    distancia: '4.3 km'
  },
  {
    id: '5',
    nome: 'SuperPet Tosa',
    tipo: 'Banho & Tosa',
    avaliacao: 4.5,
    avaliacoes: 64,
    preco: 'R$ 70,00',
    imagem: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
    distancia: '1.8 km'
  }
];

export default function ServicosScreen() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');

  // Filtrar serviços com base na categoria selecionada
  const servicosFiltrados = categoriaSelecionada === 'Todos'
    ? servicos
    : servicos.filter(servico => servico.tipo === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Serviços</Text>
        <Text style={styles.subtitulo}>Encontre serviços para o seu pet</Text>
      </View>

      <View style={styles.buscaContainer}>
        <View style={styles.inputContainer}>
          <Search size={20} color={colors.gray[500]} />
          <TextInput
            style={styles.input}
            placeholder="Buscar serviços"
            placeholderTextColor={colors.gray[400]}
            value={termoBusca}
            onChangeText={setTermoBusca}
          />
        </View>
        <TouchableOpacity style={styles.filtroButton}>
          <Filter size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriasContainer}
      >
        {categorias.map(categoria => (
          <TouchableOpacity
            key={categoria}
            style={[
              styles.categoriaItem,
              categoriaSelecionada === categoria && styles.categoriaItemAtiva
            ]}
            onPress={() => setCategoriaSelecionada(categoria)}
          >
            <Text
              style={[
                styles.categoriaTexto,
                categoriaSelecionada === categoria && styles.categoriaTextoAtivo
              ]}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={servicosFiltrados}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listaServicos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.servicoCard}>
            <Image source={{ uri: item.imagem }} style={styles.servicoImagem} />
            <View style={styles.servicoConteudo}>
              <Text style={styles.servicoNome}>{item.nome}</Text>
              <Text style={styles.servicoTipo}>{item.tipo}</Text>
              
              <View style={styles.avaliacaoContainer}>
                <Star size={16} color="#FFB800" fill="#FFB800" />
                <Text style={styles.avaliacaoTexto}>{item.avaliacao}</Text>
                <Text style={styles.avaliacoesTotais}>({item.avaliacoes})</Text>
              </View>
              
              <View style={styles.detalhesServico}>
                <Text style={styles.precoServico}>{item.preco}</Text>
                <Text style={styles.distanciaServico}>{item.distancia}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: colors.white,
  },
  titulo: {
    ...typography.heading1,
    marginBottom: 8,
  },
  subtitulo: {
    ...typography.body1,
    color: colors.gray[600],
  },
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: colors.gray[900],
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  filtroButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriasContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  categoriaItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    marginRight: 12,
  },
  categoriaItemAtiva: {
    backgroundColor: colors.primary,
  },
  categoriaTexto: {
    ...typography.body2,
    color: colors.gray[700],
  },
  categoriaTextoAtivo: {
    color: colors.white,
    fontFamily: 'Inter-Medium',
  },
  listaServicos: {
    padding: 20,
    paddingBottom: 100,
  },
  servicoCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  servicoImagem: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  servicoConteudo: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  servicoNome: {
    ...typography.subtitle1,
    marginBottom: 4,
  },
  servicoTipo: {
    ...typography.body2,
    color: colors.gray[600],
    marginBottom: 8,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avaliacaoTexto: {
    ...typography.body2,
    fontFamily: 'Inter-Medium',
    color: colors.gray[800],
    marginLeft: 4,
  },
  avaliacoesTotais: {
    ...typography.body2,
    color: colors.gray[500],
    marginLeft: 4,
  },
  detalhesServico: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  precoServico: {
    ...typography.subtitle2,
    color: colors.primary,
  },
  distanciaServico: {
    ...typography.body2,
    color: colors.gray[500],
  },
});