import React from "react";
import { View, Text, Linking,StyleSheet } from "react-native";

export const AvisoMUFACE1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe. No obstante, también puedes descargarte la APP de MUFACE para realizar el trámite sin necesidad de cl@ve)</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.muface.es/muface_Home/muface_Index/aviso-talonario.html')}>Ir a trámite</Text>
    </View>
    </View>
  );
};
export const AvisoMUFACE2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.muface.es/muface_Home/muface_Index/aviso-tse.html')}>Ir a trámite</Text>
    </View>
    </View>
  );
};
export const AvisoMUFACE3 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.muface.es/muface_Home/muface_Index/Prestaciones-Dentarias-y-Oculares.html')}>Ir a trámite</Text>
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
