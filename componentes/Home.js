import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Home = () => {
  const politica = (url) => {
    Linking.openURL(url);
  };

  const navigation=useNavigation()

  const openMenu = () => {
    navigation.openDrawer(); // Step 3
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name="menu"
        size={30}
        style={styles.menuIcon}
        onPress={openMenu} // Step 2
      />
      <Image source={require('../assets/LogoJuan.png')} style={styles.logo} />
      <Image source={require('../assets/burocracia.png')} style={styles.burocraciaImage} />
      <Text style={styles.titulo}>Bienvenido a Trámite Express</Text>
      <Text style={styles.descripcion}>
        Simplificamos el acceso en línea a los trámites públicos más comunes.
        ¡Facilitamos tu camino hacia la burocracia!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Organismos")}>
            <Text style={styles.organismos}>ACCESO A LOS ORGANISMOS</Text>
        </TouchableOpacity>
      <View style={styles.privacidadContainer}>
        
        
      </View>
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
    marginTop:50,
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
  }, privacidadContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
  },
  organismos:{
    marginTop:20,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    backgroundColor: "#8baaf7",
    fontWeight:'bold'
  } , menuIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize:40,
    zIndex: 1,
  },
 
});

export default Home;