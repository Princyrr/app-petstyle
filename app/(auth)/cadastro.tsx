import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { router } from 'expo-router';
import { PawPrint, Mail, Lock, Eye, EyeOff, User, ChevronLeft } from 'lucide-react-native';
import { colors, typography } from '@/constants/theme';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [erros, setErros] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const validarFormulario = () => {
    const novosErros = {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    };
    let valido = true;

    if (!nome) {
      novosErros.nome = 'Por favor, insira seu nome';
      valido = false;
    }

    if (!email) {
      novosErros.email = 'Por favor, insira seu email';
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = 'Por favor, insira um email válido';
      valido = false;
    }

    if (!senha) {
      novosErros.senha = 'Por favor, insira uma senha';
      valido = false;
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter pelo menos 6 caracteres';
      valido = false;
    }

    if (!confirmarSenha) {
      novosErros.confirmarSenha = 'Por favor, confirme sua senha';
      valido = false;
    } else if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = 'As senhas não coincidem';
      valido = false;
    }

    setErros(novosErros);
    return valido;
  };

  const handleCadastro = () => {
    if (validarFormulario()) {
      // Aqui seria feito o cadastro com uma API
      router.replace('/(tabs)');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ChevronLeft color={colors.gray[800]} size={24} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <PawPrint size={32} color={colors.primary} />
            <Text style={styles.logoText}>PetStyle</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.titulo}>Criar Conta</Text>
          <Text style={styles.subtitulo}>Preencha os dados para se cadastrar</Text>

          <View style={styles.inputContainer}>
            <User color={colors.gray[500]} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor={colors.gray[400]}
              value={nome}
              onChangeText={setNome}
            />
          </View>
          {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}

          <View style={styles.inputContainer}>
            <Mail color={colors.gray[500]} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.gray[400]}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null}

          <View style={styles.inputContainer}>
            <Lock color={colors.gray[500]} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor={colors.gray[400]}
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              {mostrarSenha ? (
                <EyeOff color={colors.gray[500]} size={20} />
              ) : (
                <Eye color={colors.gray[500]} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {erros.senha ? <Text style={styles.textoErro}>{erros.senha}</Text> : null}

          <View style={styles.inputContainer}>
            <Lock color={colors.gray[500]} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor={colors.gray[400]}
              secureTextEntry={!mostrarConfirmarSenha}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
            <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
              {mostrarConfirmarSenha ? (
                <EyeOff color={colors.gray[500]} size={20} />
              ) : (
                <Eye color={colors.gray[500]} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {erros.confirmarSenha ? <Text style={styles.textoErro}>{erros.confirmarSenha}</Text> : null}

          <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
            <Text style={styles.textoBotaoCadastro}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.textoLogin}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.linkLogin}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    ...typography.heading3,
    color: colors.primary,
    marginLeft: 4,
  },
  formContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  titulo: {
    ...typography.heading2,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    ...typography.body1,
    color: colors.gray[600],
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: colors.gray[900],
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  botaoCadastro: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  textoBotaoCadastro: {
    color: colors.white,
    ...typography.button,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoLogin: {
    ...typography.body2,
    color: colors.gray[600],
  },
  linkLogin: {
    ...typography.body2,
    color: colors.primary,
    fontFamily: 'Inter-Bold',
  },
  textoErro: {
    color: colors.error,
    fontSize: 14,
    marginBottom: 8,
    marginTop: -4,
  },
});