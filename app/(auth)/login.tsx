import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { Link, router } from 'expo-router';
import { PawPrint, Mail, Lock, Eye, EyeOff } from 'lucide-react-native';
import { colors, typography } from '@/constants/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const validarFormulario = () => {
    let valido = true;
    
    // Validar email
    if (!email) {
      setErroEmail('Por favor, insira seu email');
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErroEmail('Por favor, insira um email válido');
      valido = false;
    } else {
      setErroEmail('');
    }
    
    // Validar senha
    if (!senha) {
      setErroSenha('Por favor, insira sua senha');
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha('A senha deve ter pelo menos 6 caracteres');
      valido = false;
    } else {
      setErroSenha('');
    }
    
    return valido;
  };

  const handleLogin = () => {
    if (validarFormulario()) {
      // Aqui seria feita a autenticação com uma API
      router.replace('/(tabs)');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <PawPrint size={48} color={colors.primary} />
          <Text style={styles.logoText}>PetStyle</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.titulo}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitulo}>Entre com sua conta para continuar</Text>
          
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
          {erroEmail ? <Text style={styles.textoErro}>{erroEmail}</Text> : null}
          
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
          {erroSenha ? <Text style={styles.textoErro}>{erroSenha}</Text> : null}
          
          <TouchableOpacity style={styles.botaoEsqueceuSenha}>
            <Text style={styles.textoEsqueceuSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin}>
            <Text style={styles.textoBotaoLogin}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.cadastroContainer}>
            <Text style={styles.textoCadastro}>Não tem uma conta? </Text>
            <Link href="/cadastro" asChild>
              <TouchableOpacity>
                <Text style={styles.linkCadastro}>Cadastre-se</Text>
              </TouchableOpacity>
            </Link>
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
     marginTop:80,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    ...typography.heading1,
    color: colors.primary,
    marginLeft: 8,
  },
  formContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
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
  botaoEsqueceuSenha: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  textoEsqueceuSenha: {
    ...typography.body2,
    color: colors.primary,
  },
  botaoLogin: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  textoBotaoLogin: {
    color: colors.white,
    ...typography.button,
  },
  cadastroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCadastro: {
    ...typography.body2,
    color: colors.gray[600],
  },
  linkCadastro: {
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