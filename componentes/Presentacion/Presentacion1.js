import React from "react";
import { View, Text, StyleSheet, Linking,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Presentacion1 = () => {

  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Presentacion2") }
  const salto = () => { navegacion.navigate("Nav") }

  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
        Aquí encontrarás los trámites públicos más habituales más comunmente empleados en diversos organismos gubernamentales.
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
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#d9d7fa',
    
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  parrafo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 5,
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

export default Presentacion1;
