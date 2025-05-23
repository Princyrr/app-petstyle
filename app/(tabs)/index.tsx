import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Bell, Search, Plus } from 'lucide-react-native';
import { colors, typography } from '@/constants/theme';
import ServiceCard from '@/components/ServiceCard';
import PetCard from '@/components/PetCard';

export default function HomeScreen() {
  // Dados simulados para demonstração
  const proximos = [
    {
      id: '1',
      servico: 'Banho & Tosa',
      petshop: 'PetStyle Studio',
      data: '22 de maio',
      hora: '14:30',
      imagem: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg'
    },
    {
      id: '2',
      servico: 'Consulta Veterinária',
      petshop: 'VetCare',
      data: '25 de maio',
      hora: '10:00',
      imagem: 'https://images.pexels.com/photos/7469209/pexels-photo-7469209.jpeg'
    }
  ];

  const servicos = [
    {
      id: '1',
      nome: 'Banho & Tosa',
      imagem: 'https://images.pexels.com/photos/4587984/pexels-photo-4587984.jpeg'
    },
    {
      id: '2',
      nome: 'Veterinário',
      imagem: 'https://images.pexels.com/photos/6235936/pexels-photo-6235936.jpeg'
    },
    {
      id: '3',
      nome: 'Pet Sitter',
      imagem: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg'
    },
    {
      id: '4',
      nome: 'Adestramento',
      imagem: 'https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg'
    }
  ];

  const pets = [
    {
      id: '1',
      nome: 'Max',
      tipo: 'Cachorro',
      raca: 'Golden Retriever',
      idade: '3 anos',
      imagem: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg'
    },
    {
      id: '2',
      nome: 'Luna',
      tipo: 'Gato',
      raca: 'Siamês',
      idade: '2 anos',
      imagem: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.saudacao}>Olá, Priscila Ramonna!</Text>
          <Text style={styles.subtitulo}>Como estão seus pets hoje?</Text>
        </View>
        <TouchableOpacity style={styles.notificacao}>
          <Bell size={24} color={colors.gray[700]} />
          <View style={styles.badgeNotificacao}>
            <Text style={styles.badgeTexto}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.busca}>
        <Search size={20} color={colors.gray[500]} />
        <Text style={styles.textoBusca}>Buscar serviços, pets...</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        {/* Próximos agendamentos */}
        <View style={styles.secao}>
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.tituloSecao}>Próximos Agendamentos</Text>
            <TouchableOpacity>
              <Text style={styles.verTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listaHorizontal}
          >
            {proximos.map((agendamento) => (
              <TouchableOpacity key={agendamento.id} style={styles.cardAgendamento}>
                <Image 
                  source={{ uri: agendamento.imagem }} 
                  style={styles.imagemAgendamento} 
                />
                <View style={styles.infoAgendamento}>
                  <Text style={styles.servicoAgendamento}>{agendamento.servico}</Text>
                  <Text style={styles.petshopAgendamento}>{agendamento.petshop}</Text>
                  <View style={styles.dataHoraContainer}>
                    <Text style={styles.dataHoraAgendamento}>{agendamento.data}</Text>
                    <Text style={styles.dataHoraAgendamento}> • </Text>
                    <Text style={styles.dataHoraAgendamento}>{agendamento.hora}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Serviços populares */}
        <View style={styles.secao}>
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.tituloSecao}>Serviços Populares</Text>
            <TouchableOpacity>
              <Text style={styles.verTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicosGrid}>
            {servicos.map((servico) => (
              <ServiceCard 
                key={servico.id}
                nome={servico.nome}
                imagem={servico.imagem}
              />
            ))}
          </View>
        </View>

        {/* Meus pets */}
        <View style={styles.secao}>
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.tituloSecao}>Meus Pets</Text>
            <TouchableOpacity>
              <Text style={styles.verTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listaHorizontal}
          >
            {pets.map((pet) => (
              <PetCard 
                key={pet.id}
                nome={pet.nome}
                tipo={pet.tipo}
                raca={pet.raca}
                idade={pet.idade}
                imagem={pet.imagem}
              />
            ))}
            <TouchableOpacity style={styles.adicionarPet}>
              <View style={styles.iconAdicionarPet}>
                <Plus size={24} color={colors.primary} />
              </View>
              <Text style={styles.textoAdicionarPet}>Adicionar Pet</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: colors.white,
  },
  saudacao: {
    ...typography.heading2,
  },
  subtitulo: {
    ...typography.body1,
    color: colors.gray[600],
    marginTop: 4,
  },
  notificacao: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeNotificacao: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeTexto: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
  busca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  textoBusca: {
    ...typography.body2,
    color: colors.gray[500],
    marginLeft: 12,
  },
  conteudo: {
    paddingBottom: 100,
  },
  secao: {
    marginBottom: 28,
  },
  cabecalhoSecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  tituloSecao: {
    ...typography.heading3,
  },
  verTodos: {
    ...typography.body2,
    color: colors.primary,
  },
  listaHorizontal: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  cardAgendamento: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  imagemAgendamento: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  infoAgendamento: {
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center',
  },
  servicoAgendamento: {
    ...typography.subtitle1,
    marginBottom: 4,
  },
  petshopAgendamento: {
    ...typography.body2,
    color: colors.gray[600],
    marginBottom: 8,
  },
  dataHoraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataHoraAgendamento: {
    ...typography.body2,
    color: colors.primary,
  },
  servicosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  adicionarPet: {
    width: 150,
    backgroundColor: colors.gray[50],
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.gray[300],
  },
  iconAdicionarPet: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  textoAdicionarPet: {
    ...typography.subtitle2,
    color: colors.primary,
  },
});