

import React from "react";
import { View, Text, StyleSheet, Linking,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Presentacion2 = () => {

  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Presentacion3") }
  const salto = () => { navegacion.navigate("Nav") }

  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
      Aunque en muchos de estos procedimientos no es necesario que los usuarios se autentiquen previamente, en algunos casos sí es requerido.
        Esta autenticación puede realizarse a través de diferentes métodos, como el certificado digital, el DNI electrónico o el sistema cl@ve (que puedes solicitar en este 
        <Text style={styles.link} onPress={() => Linking.openURL("https://sede.agenciatributaria.gob.es/Sede/clave.html")}> enlace</Text>).
        </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={salto}>
          <Text style={styles.buttonText}>SALTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={pasa}>
          <Text style={styles.buttonText}>SIGUIENTE</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  parrafo: {
    fontSize: 23,
    textAlign: 'justify',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  skipButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#33FF77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Presentacion2;

