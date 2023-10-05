import React from "react";
import { View, Text, Linking,StyleSheet } from "react-native";

export const AvisoJusticia = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Inicialmente te pedirán que elijas provincia, registro concreto para el que quieres la cita y el tipo de trámite a realizar</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sede.administracionespublicas.gob.es/icpplustiej/citar?org=JUS-RC&locale=es')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aviso: {
    backgroundColor: "#eff4bd",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  texto: {
    fontSize: 24,
    marginBottom: 8,
    textAlign:'justify'
  },
  avisoLink: {
    color: "#007BFF",
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign:'center'
  },container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
