import React from "react";
import { View, Text, Linking, StyleSheet} from "react-native";

export const AvisoCatastro1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para este trámite vas a necesitar un dato adicional de tu DNI, en concreto el Número de soporte/IDEXP, que está compuesto normalmente por una serie de tres letras y siete números. Lo encontrarás en la parte delantera del DNI (donde está la foto). También te pedirán adicionalmente un número de referencia catastral de algún inmueble del que seas titular</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.sedecatastro.gob.es/Accesos/SECAccDNI.aspx?Dest=1')}>Ir a trámite</Text>
    </View>
    </View>
  );
};
export const AvisoCatastro2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para este trámite vas a necesitar un dato adicional de tu DNI, en concreto el Número de soporte/IDEXP, que está compuesto normalmente por una serie de tres letras y siete números. Lo encontrarás en la parte delantera del DNI (donde está la foto). Después tendras que relacionar la referencia catastral del inmueble que desees consultar</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www1.sedecatastro.gob.es/Accesos/SECAccvr.aspx')}>Ir a trámite</Text>
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

