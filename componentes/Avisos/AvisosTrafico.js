import React from "react";
import { View, Text, Linking,StyleSheet } from "react-native";

export const AvisosTrafico1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Entre otros datos te van a pedir el número de expediente, que se encuentra en la parte superior del aviso de la multa. No obstante, si la has recibido por correo, el número de expediente se encontrará en la carta de notificación, que te habrán enviado junto con el aviso de la multa.</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sedeclave.dgt.gob.es/WEB_IWPS5_INET/jsp/sincertificado/index.jspx')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

export const AvisosTrafico2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Además de la matrícula, te van a pedir también un dato más del vehículo, que puede ser el número de bastidor (lo encontrarás tanto en el permiso de circulación como en la ficha técnica, apartado E) o la fecha de matriculación, que encontrarás en el permiso de circulación.</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://www.itvcita.com/Welcome.do;jsessionid=m2aaDJRF8WgTKnqJYTGXB3uo6EuyGqN-KO3KUMh3.master:nodo-citas1')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

export const AvisosTrafico3 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con Cl@ve,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/index.shtml')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

export const AvisosTrafico4 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con Cl@ve,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sedeclave.dgt.gob.es/WEB_INTV_INTER/xhtml/acciones/iniciarSolicitudInforme.jsf')}>Ir a trámite</Text>
    </View>
    </View>
  );
};

export const AvisosTrafico5 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.aviso}>
      <Text style={styles.texto}>¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con Cl@ve,Certificado Digital o DNIe</Text>
      <Text style={styles.avisoLink} onPress={() => Linking.openURL('https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/')}>Ir a trámite</Text>
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
