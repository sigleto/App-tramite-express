import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Anuncio from "../Avisos/Anuncio";

const SEPE = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/SEPE.png')} style={styles.image} />
      <Text style={styles.titulo}>Servicios del SEPE</Text>
      <Anuncio/>
      <View style={styles.serviciosList}>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/cita-previa/cita-previa-solicitud.html')}>
          <Text style={styles.itemText}>PETICION DE CITA PREVIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.sepe.gob.es/SolicPrestIndividualWeb/flows/solicitud?execution=e1s1')}>
          <Text style={styles.itemText}>PRESOLICITUD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSEPE1")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>TRÁMITES RELATIVOS A PRESTACIONES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSEPE2")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>OBTENCIÓN DE CERTIFICADOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.volver} onPress={()=>navigation.navigate("OrganismosStack")}>
            <Text style={styles.volverText}>VOLVER</Text>
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
    textAlign:'center',
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
    textAlign:'center',
  },
  volver: {
    marginTop: 30,
    marginBottom:20,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    backgroundColor: "#a3c267",
  
  },
  volverText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
    textAlign:'center',
  },
  arroba:{
    fontSize:20,
    color:'#f41171'
  }
});

export default SEPE;