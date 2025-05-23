import { useEffect } from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirecionar para a tela de login como página inicial
  return <Redirect href="/login" />;
}