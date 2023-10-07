import React from "react";
import { View, Text, Linking,StyleSheet } from "react-native";

export const AvisoSEPE1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar estos trámites deberás autenticarte con C@ave,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.sepe.es/HomeSepe/Personas/distributiva-prestaciones.html')}>Ir a trámite</Text>
    </View>
    </View>
  );
};
export const AvisoSEPE2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar estos trámites deberás autenticarte con C@ave,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sede.sepe.gob.es/DServiciosPrestanetWEB/CertificadosPrestaWeb.do')}>Ir a trámite</Text>
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
