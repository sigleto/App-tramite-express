

import React from "react";
import { View, Text, StyleSheet, Linking,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Presentacion2 = () => {

  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Nav") }
  

  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
       En cualquier caso, antes de acceder a cada trámite, te proporcionamos información sobre los datos y requisitos que podrías necesitar para llevar a cabo la gestión.
       </Text>
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.nextButton} onPress={pasa}>
          <Text style={styles.buttonText}>COMENZAR</Text>
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
    fontSize: 25,
    textAlign: 'justify',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    paddingHorizontal: 30,
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

