import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  
  

  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoJuan.png')} style={styles.logo} />
      <Image source={require('../assets/burocracia.png')} style={styles.burocraciaImage} />
      <Text style={styles.titulo}>Bienvenido a Trámite Express</Text>
      <Text style={styles.descripcion}>
        Simplificamos el acceso en línea a los trámites públicos más comunes. Además,
        te ofrecemos breves notas informativas sobre los requisitos necesarios para
        cada trámite específico. ¡Facilitamos tu camino hacia la burocracia!
      </Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 300,
    height: 200,
  },
  burocraciaImage: {
    width: 300,
    height: 200,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descripcion: {
    textAlign: 'center',
    marginTop: 20,
    fontSize:20,
    color:'#67569a'
  },
  botonComenzar: {
    backgroundColor: 'blue', // Color de fondo del botón
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  botonTexto: {
    color: 'white', // Color del texto del botón
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;
