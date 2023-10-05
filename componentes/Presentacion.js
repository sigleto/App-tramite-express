import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

const Presentacion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
        Hemos diseñado esta aplicación para reunir de manera centralizada los procedimientos públicos más habituales que se utilizan en la vida cotidiana en diversos organismos gubernamentales.
        Aunque en muchos de estos procedimientos no es necesario que los usuarios se autentiquen previamente, en algunos casos sí es requerido.
        Esta autenticación puede realizarse a través de diferentes métodos, como el certificado digital, el DNI electrónico o el sistema cl@ve (que puedes solicitar en este 
        <Text style={styles.link} onPress={() => Linking.openURL("https://sede.agenciatributaria.gob.es/Sede/clave.html")}> enlace</Text>).
        En cualquier caso, antes de acceder a cada trámite, te proporcionamos información sobre los datos y requisitos que podrías necesitar para llevar a cabo la gestión.
      </Text>
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
  parrafo: {
    fontSize: 22,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Presentacion;
