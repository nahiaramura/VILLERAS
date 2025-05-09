import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const imgExterna = require('../assets/img/descarga.jpg');

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login App (LOLARDA NAHIARARDIUM)</Text>
      <ImageBackground
        source={imgExterna}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
      <Text style={styles.link}>¿Olvidaste la clave?</Text>
      <Text style={styles.link}>Crear Cuenta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    height: 100,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    color: '#555',
    marginTop: 5,
  },
});

export default Login;
