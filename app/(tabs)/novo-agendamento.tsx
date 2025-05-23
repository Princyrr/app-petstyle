import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform
} from 'react-native';
import { ChevronLeft, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react-native';
import { router } from 'expo-router';
import { colors, typography } from '@/constants/theme';

export default function NovoAgendamentoScreen() {
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [petSelecionado, setPetSelecionado] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState('');
  const [horaSelecionada, setHoraSelecionada] = useState('');

  // Dados simulados
  const servicos = [
    { id: 'banho', nome: 'Banho', preco: 'R$ 60,00' },
    { id: 'tosa', nome: 'Tosa', preco: 'R$ 70,00' },
    { id: 'banho-tosa', nome: 'Banho & Tosa', preco: 'R$ 120,00' },
    { id: 'unhas', nome: 'Corte de Unhas', preco: 'R$ 30,00' },
    { id: 'veterinario', nome: 'Consulta Veterinária', preco: 'R$ 150,00' }
  ];

  const pets = [
    { id: '1', nome: 'Max', tipo: 'Cachorro', raca: 'Golden Retriever', imagem: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg' },
    { id: '2', nome: 'Luna', tipo: 'Gato', raca: 'Siamês', imagem: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg' }
  ];

  const datas = [
    { id: '1', dia: '15', diaSemana: 'Seg', mes: 'Mai' },
    { id: '2', dia: '16', diaSemana: 'Ter', mes: 'Mai' },
    { id: '3', dia: '17', diaSemana: 'Qua', mes: 'Mai' },
    { id: '4', dia: '18', diaSemana: 'Qui', mes: 'Mai' },
    { id: '5', dia: '19', diaSemana: 'Sex', mes: 'Mai' },
    { id: '6', dia: '20', diaSemana: 'Sáb', mes: 'Mai' },
    { id: '7', dia: '21', diaSemana: 'Dom', mes: 'Mai' }
  ];

  const horarios = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleContinuar = () => {
    // Aqui iríamos para a tela de confirmação ou realizar o agendamento
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft color={colors.gray[800]} size={24} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Novo Agendamento</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        {/* Seleção de serviço */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Selecione o serviço</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicosContainer}
          >
            {servicos.map((servico) => (
              <TouchableOpacity
                key={servico.id}
                style={[
                  styles.servicoItem,
                  servicoSelecionado === servico.id && styles.servicoSelecionado
                ]}
                onPress={() => setServicoSelecionado(servico.id)}
              >
                <Text 
                  style={[
                    styles.servicoNome,
                    servicoSelecionado === servico.id && styles.servicoTextoSelecionado
                  ]}
                >
                  {servico.nome}
                </Text>
                <Text 
                  style={[
                    styles.servicoPreco,
                    servicoSelecionado === servico.id && styles.servicoTextoSelecionado
                  ]}
                >
                  {servico.preco}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Seleção de pet */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Selecione o pet</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.petsContainer}
          >
            {pets.map((pet) => (
              <TouchableOpacity
                key={pet.id}
                style={[
                  styles.petItem,
                  petSelecionado === pet.id && styles.petSelecionado
                ]}
                onPress={() => setPetSelecionado(pet.id)}
              >
                <Image source={{ uri: pet.imagem }} style={styles.petImagem} />
                <Text style={styles.petNome}>{pet.nome}</Text>
                <Text style={styles.petRaca}>{pet.raca}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Seleção de data */}
        <View style={styles.secao}>
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.tituloSecao}>Selecione a data</Text>
            <TouchableOpacity style={styles.botaoCalendario}>
              <CalendarIcon size={20} color={colors.primary} />
              <Text style={styles.textoCalendario}>Calendário</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.datasContainer}
          >
            {datas.map((data) => (
              <TouchableOpacity
                key={data.id}
                style={[
                  styles.dataItem,
                  dataSelecionada === data.id && styles.dataSelecionada
                ]}
                onPress={() => setDataSelecionada(data.id)}
              >
                <Text 
                  style={[
                    styles.diaSemana,
                    dataSelecionada === data.id && styles.dataTextoSelecionado
                  ]}
                >
                  {data.diaSemana}
                </Text>
                <Text 
                  style={[
                    styles.dia,
                    dataSelecionada === data.id && styles.dataTextoSelecionado
                  ]}
                >
                  {data.dia}
                </Text>
                <Text 
                  style={[
                    styles.mes,
                    dataSelecionada === data.id && styles.dataTextoSelecionado
                  ]}
                >
                  {data.mes}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Seleção de horário */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Selecione o horário</Text>
          
          <View style={styles.horariosContainer}>
            {horarios.map((horario) => (
              <TouchableOpacity
                key={horario}
                style={[
                  styles.horarioItem,
                  horaSelecionada === horario && styles.horarioSelecionado
                ]}
                onPress={() => setHoraSelecionada(horario)}
              >
                <Clock 
                  size={16} 
                  color={horaSelecionada === horario ? colors.white : colors.gray[600]} 
                />
                <Text 
                  style={[
                    styles.horarioTexto,
                    horaSelecionada === horario && styles.horarioTextoSelecionado
                  ]}
                >
                  {horario}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Local */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Local</Text>
          
          <TouchableOpacity style={styles.localContainer}>
            <MapPin size={20} color={colors.primary} />
            <View style={styles.localInfo}>
              <Text style={styles.localNome}>PetStyle Studio</Text>
              <Text style={styles.localEndereco}>Av. conselheiro rosa e silva, 1000 - Recife</Text>
            </View>
            <Text style={styles.localDistancia}>1.2 km</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.resumoPreco}>
          <Text style={styles.textoTotal}>Total:</Text>
          <Text style={styles.valorTotal}>R$ 60,00</Text>
        </View>
        <TouchableOpacity 
          style={[
            styles.botaoContinuar,
            (!servicoSelecionado || !petSelecionado || !dataSelecionada || !horaSelecionada) && 
            styles.botaoDesabilitado
          ]}
          onPress={handleContinuar}
          disabled={!servicoSelecionado || !petSelecionado || !dataSelecionada || !horaSelecionada}
        >
          <Text style={styles.textoBotaoContinuar}>Continuar</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: 40,
  },
  titulo: {
    ...typography.heading3,
  },
  conteudo: {
    paddingBottom: 120,
  },
  secao: {
    marginBottom: 24,
    paddingTop: 16,
  },
  tituloSecao: {
    ...typography.subtitle1,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  cabecalhoSecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  botaoCalendario: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoCalendario: {
    ...typography.body2,
    color: colors.primary,
    marginLeft: 4,
  },
  servicosContainer: {
    paddingHorizontal: 20,
  },
  servicoItem: {
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    minWidth: 140,
  },
  servicoSelecionado: {
    backgroundColor: colors.primary,
  },
  servicoNome: {
    ...typography.subtitle2,
    marginBottom: 4,
  },
  servicoPreco: {
    ...typography.body2,
    color: colors.gray[600],
  },
  servicoTextoSelecionado: {
    color: colors.white,
  },
  petsContainer: {
    paddingHorizontal: 20,
  },
  petItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 120,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  petSelecionado: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  petImagem: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
  },
  petNome: {
    ...typography.subtitle2,
    marginBottom: 4,
  },
  petRaca: {
    ...typography.body2,
    color: colors.gray[600],
  },
  datasContainer: {
    paddingHorizontal: 20,
  },
  dataItem: {
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 70,
    alignItems: 'center',
  },
  dataSelecionada: {
    backgroundColor: colors.primary,
  },
  diaSemana: {
    ...typography.body2,
    color: colors.gray[600],
    marginBottom: 4,
  },
  dia: {
    ...typography.heading3,
    marginBottom: 2,
  },
  mes: {
    ...typography.body2,
    color: colors.gray[600],
  },
  dataTextoSelecionado: {
    color: colors.white,
  },
  horariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  horarioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
    marginBottom: 12,
  },
  horarioSelecionado: {
    backgroundColor: colors.primary,
  },
  horarioTexto: {
    ...typography.body2,
    color: colors.gray[800],
    marginLeft: 6,
  },
  horarioTextoSelecionado: {
    color: colors.white,
  },
  localContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[50],
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  localInfo: {
    flex: 1,
    marginLeft: 12,
  },
  localNome: {
    ...typography.subtitle2,
    marginBottom: 4,
  },
  localEndereco: {
    ...typography.body2,
    color: colors.gray[600],
  },
  localDistancia: {
    ...typography.body2,
    color: colors.primary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 36 : 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resumoPreco: {
    flex: 1,
  },
  textoTotal: {
    ...typography.body2,
    color: colors.gray[600],
    marginBottom: 2,
  },
  valorTotal: {
    ...typography.heading3,
    color: colors.primary,
  },
  botaoContinuar: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 160,
    alignItems: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: colors.gray[300],
  },
  textoBotaoContinuar: {
    ...typography.button,
    color: colors.white,
  },
});