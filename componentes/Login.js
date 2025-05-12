import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const imgFondo = require('../assets/img/boliche-1635360.jpg'); // misma imagen para fondo
const imgLogo = require('../assets/img/descarga.jpg');  // misma imagen para logo

const Login = () => {
  return (
    <ImageBackground source={imgFondo} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Login App (LOLARDA NAHIARARDIUM)</Text>

        <Image
          source={imgLogo}
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#333"
        />

        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#333"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <Text style={styles.link}>¿Olvidaste la clave?</Text>
        <Text style={styles.link}>Crear Cuenta</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.50)', // opcional: fondo blanco con transparencia
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    height: 250,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
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
