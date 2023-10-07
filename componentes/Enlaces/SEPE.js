import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SEPE = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/SEPE.png')} style={styles.image} />
      <Text style={styles.titulo}>Servicios del SEPE</Text>

      <View style={styles.serviciosList}>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/cita-previa/cita-previa-solicitud.html')}>
          <Text style={styles.itemText}>PETICION DE CITA PREVIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.sepe.gob.es/SolicPrestIndividualWeb/flows/solicitud?execution=e1s1')}>
          <Text style={styles.itemText}>PRESOLICITUD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSEPE1")}>
          <Text style={styles.itemText}>TRÁMITES RELATIVOS A PRESTACIONES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSEPE2")}>
          <Text style={styles.itemText}>OBTENCIÓN DE CERTIFICADOS</Text>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
    marginTop:60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  serviciosList: {
    marginLeft: 16,
  },
  item: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  itemText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default SEPE;