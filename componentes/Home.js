import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Asumiendo que estás utilizando React Navigation

const Home = () => {
  const navigation = useNavigation();

  const handleComenzar = () => {
    navigation.navigate('Presentacion'); // Reemplaza 'Presentacion' con el nombre de tu ruta en React Navigation
  };

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
      <TouchableOpacity onPress={handleComenzar} style={styles.botonComenzar}>
        <Text style={styles.botonTexto}>Comenzar</Text>
      </TouchableOpacity>
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
    width: 100,
    height: 100,
  },
  burocraciaImage: {
    width: 200,
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
