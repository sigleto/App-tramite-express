import React from "react";
import { View, Text, Linking,StyleSheet } from "react-native";

export const AvisoSegSocial1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para este trámite necesitas estar dado de alta en Cl@ve Móvil</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+numero+de+la+Seguridad+Social')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

export const AvisoSegSocial2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para este trámite te pedirán, entre otras cosas, un correo y una foto del DNI (la podrás hacer durante el mismo trámite)</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://identificacion.seg-social.es/?origen=inss&representante=true&destino=https%3A%2F%2Ftramites.seg-social.es%2Fpension-jubilacion%2Fpension-jubilacion-nacional')}>Ir a trámite</Text>
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
