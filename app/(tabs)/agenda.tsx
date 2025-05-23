import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react-native';
import { colors, typography } from '@/constants/theme';

export default function AgendaScreen() {
  const [mesSelecionado, setMesSelecionado] = useState('Maio 2025');
  const [abaSelecionada, setAbaSelecionada] = useState('agendados');

  // Dados simulados de agendamentos
  const agendamentos = [
    {
      id: '1',
      servico: 'Banho & Tosa',
      petshop: 'PetStyle Studio',
      data: '22 de maio',
      hora: '14:30',
      pet: 'Max',
      status: 'agendado',
      imagem: 'https://images.pexels.com/photos/4587984/pexels-photo-4587984.jpeg'
    },
    {
      id: '2',
      servico: 'Consulta Veterinária',
      petshop: 'VetCare',
      data: '25 de maio',
      hora: '10:00',
      pet: 'Luna',
      status: 'agendado',
      imagem: 'https://images.pexels.com/photos/6235936/pexels-photo-6235936.jpeg'
    },
    {
      id: '3',
      servico: 'Banho',
      petshop: 'PetStyle Studio',
      data: '15 de maio',
      hora: '16:00',
      pet: 'Max',
      status: 'concluido',
      imagem: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg'
    },
    {
      id: '4',
      servico: 'Vacina Anual',
      petshop: 'Dr. Pet Veterinária',
      data: '10 de maio',
      hora: '09:30',
      pet: 'Luna',
      status: 'concluido',
      imagem: 'https://images.pexels.com/photos/7469485/pexels-photo-7469485.jpeg'
    },
    {
      id: '5',
      servico: 'Tosa',
      petshop: 'SuperPet',
      data: '05 de maio',
      hora: '11:00',
      pet: 'Max',
      status: 'cancelado',
      imagem: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg'
    }
  ];

  // Filtrar agendamentos com base na aba selecionada
  const agendamentosFiltrados = agendamentos.filter(
    agendamento => agendamento.status === abaSelecionada
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Agenda</Text>
        <Text style={styles.subtitulo}>Gerencie seus agendamentos</Text>
      </View>

      <View style={styles.seletorMes}>
        <TouchableOpacity style={styles.botaoMes}>
          <ChevronLeft size={24} color={colors.gray[600]} />
        </TouchableOpacity>
        <View style={styles.mesContainer}>
          <Text style={styles.textoMes}>{mesSelecionado}</Text>
          <CalendarIcon size={16} color={colors.gray[600]} />
        </View>
        <TouchableOpacity style={styles.botaoMes}>
          <ChevronRight size={24} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>

      <View style={styles.abas}>
        <TouchableOpacity
          style={[
            styles.aba,
            abaSelecionada === 'agendados' && styles.abaSelecionada
          ]}
          onPress={() => setAbaSelecionada('agendados')}
        >
          <Text
            style={[
              styles.textoAba,
              abaSelecionada === 'agendados' && styles.textoAbaSelecionada
            ]}
          >
            Agendados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.aba,
            abaSelecionada === 'concluido' && styles.abaSelecionada
          ]}
          onPress={() => setAbaSelecionada('concluido')}
        >
          <Text
            style={[
              styles.textoAba,
              abaSelecionada === 'concluido' && styles.textoAbaSelecionada
            ]}
          >
            Concluídos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.aba,
            abaSelecionada === 'cancelado' && styles.abaSelecionada
          ]}
          onPress={() => setAbaSelecionada('cancelado')}
        >
          <Text
            style={[
              styles.textoAba,
              abaSelecionada === 'cancelado' && styles.textoAbaSelecionada
            ]}
          >
            Cancelados
          </Text>
        </TouchableOpacity>
      </View>

      {agendamentosFiltrados.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.listaContainer}
          showsVerticalScrollIndicator={false}
        >
          {agendamentosFiltrados.map((agendamento) => (
            <TouchableOpacity key={agendamento.id} style={styles.cardAgendamento}>
              <Image source={{ uri: agendamento.imagem }} style={styles.imagemAgendamento} />
              <View style={styles.infoAgendamento}>
                <Text style={styles.servicoAgendamento}>{agendamento.servico}</Text>
                <Text style={styles.petshopAgendamento}>{agendamento.petshop}</Text>
                <Text style={styles.petAgendamento}>Pet: {agendamento.pet}</Text>
                <View style={styles.dataHoraContainer}>
                  <Text style={styles.dataHoraAgendamento}>{agendamento.data}</Text>
                  <Text style={styles.dataHoraAgendamento}> • </Text>
                  <Text style={styles.dataHoraAgendamento}>{agendamento.hora}</Text>
                </View>
              </View>
              {abaSelecionada === 'agendados' && (
                <View style={styles.botoesAcao}>
                  <TouchableOpacity style={styles.botaoReagendar}>
                    <Text style={styles.textoBotaoReagendar}>Reagendar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoCancelar}>
                    <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.semAgendamentos}>
          <CalendarIcon size={64} color={colors.gray[400]} />
          <Text style={styles.textoSemAgendamentos}>
            {abaSelecionada === 'agendados'
              ? 'Você não possui agendamentos ativos'
              : abaSelecionada === 'concluido'
              ? 'Você não possui agendamentos concluídos'
              : 'Você não possui agendamentos cancelados'}
          </Text>
          {abaSelecionada === 'agendados' && (
            <TouchableOpacity style={styles.botaoAgendar}>
              <Text style={styles.textoBotaoAgendar}>Agendar Serviço</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
  seletorMes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  botaoMes: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoMes: {
    ...typography.subtitle1,
    marginRight: 8,
  },
  abas: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  aba: {
    paddingVertical: 12,
    marginRight: 24,
  },
  abaSelecionada: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  textoAba: {
    ...typography.subtitle2,
    color: colors.gray[600],
  },
  textoAbaSelecionada: {
    color: colors.primary,
  },
  listaContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  cardAgendamento: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  imagemAgendamento: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoAgendamento: {
    marginBottom: 16,
  },
  servicoAgendamento: {
    ...typography.subtitle1,
    marginBottom: 4,
  },
  petshopAgendamento: {
    ...typography.body1,
    color: colors.gray[800],
    marginBottom: 8,
  },
  petAgendamento: {
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
  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoReagendar: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 12,
  },
  textoBotaoReagendar: {
    ...typography.button,
    color: colors.primary,
  },
  botaoCancelar: {
    flex: 1,
    backgroundColor: colors.gray[100],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoCancelar: {
    ...typography.button,
    color: colors.gray[700],
  },
  semAgendamentos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  textoSemAgendamentos: {
    ...typography.subtitle1,
    color: colors.gray[600],
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  botaoAgendar: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoAgendar: {
    ...typography.button,
    color: colors.white,
  },
});