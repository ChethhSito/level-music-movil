import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#4eac28ff', // Color de fondo claro
  },
});

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola, ahora sí funciono.dasadasd</Text>
    </View>
  )
  
}
