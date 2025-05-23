import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { User, Pen as Pet, CreditCard, MapPin, Settings, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { colors, typography } from '@/constants/theme';

export default function PerfilScreen() {
  const handleLogout = () => {
    // Lógica para fazer logout
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Perfil</Text>
        <Text style={styles.subtitulo}>Suas informações e configurações</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.perfilCard}>
          <Image 
            source={require('../../assets/images/eu.png')} 
            style={styles.fotoPerfil} 
          />
          <View style={styles.infoPerfil}>
            <Text style={styles.nomePerfil}>Priscila Ramonna</Text>
            <Text style={styles.emailPerfil}>princyrpiress@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.botaoEditar}>
            <Text style={styles.textoBotaoEditar}>Editar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Conta</Text>
          
          <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <User size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Informações Pessoais</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Pet size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Meus Pets</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <CreditCard size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Formas de Pagamento</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <MapPin size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Endereços</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Preferências</Text>
          
          <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Settings size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Configurações</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <HelpCircle size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuTexto}>Ajuda e Suporte</Text>
              <ChevronRight size={20} color={colors.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.botaoLogout}
          onPress={handleLogout}
        >
          <LogOut size={20} color={colors.error} />
          <Text style={styles.textoLogout}>Sair da conta</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.versao}>Versão 1.0.0</Text>
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
  conteudo: {
    paddingBottom: 40,
  },
  perfilCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  fotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoPerfil: {
    flex: 1,
    marginLeft: 16,
  },
  nomePerfil: {
    ...typography.subtitle1,
    marginBottom: 4,
  },
  emailPerfil: {
    ...typography.body2,
    color: colors.gray[600],
  },
  botaoEditar: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBotaoEditar: {
    ...typography.button,
    color: colors.primary,
    fontSize: 14,
  },
  secao: {
    marginBottom: 24,
  },
  tituloSecao: {
    ...typography.subtitle1,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  menuList: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray[200],
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTexto: {
    ...typography.body1,
    flex: 1,
  },
  botaoLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: 12,
  },
  textoLogout: {
    ...typography.button,
    color: colors.error,
    marginLeft: 12,
  },
  footer: {
    alignItems: 'center',
  },
  versao: {
    ...typography.body2,
    color: colors.gray[500],
  },
});