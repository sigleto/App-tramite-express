import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Anuncio from "../Avisos/Anuncio";

const SegSocial = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/SeguridadSocial.jpg")} style={styles.image} />
      <Text style={styles.titulo}>Servicios de la Seguridad Social</Text>
      <Anuncio/>
      <View style={styles.serviciosList}>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://imv.seg-social.es/')}>
          <Text style={styles.itemText}>Solicitud Ingreso mínimo vital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://tramites.seg-social.es/tramites/asistencia.html')}>
          <Text style={styles.itemText}>Solicitud Asistencia Sanitaria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://identificacion.seg-social.es/?origen=inss&representante=true&destino=https%3A%2F%2Ftramites.seg-social.es%2Fnacimiento-menor%2Fprestacion-nacimiento-cuidado-menor')}>
          <Text style={styles.itemText}>Solicitud Prestaciones Familiares (nacimiento, parto, adopción...)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://pssc.seg-social.es/prestacion-incapacidad-temporal-inss')}>
          <Text style={styles.itemText}>Solicitud Prestacion Incapacidad Temporal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSegSocial1")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>Obtención del número de afiliado de la Seg Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoSegSocial2")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>Solicitud de la pensión por jubilación</Text>
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
  },arroba:{
    fontSize:20,
    color:'#f41171'
  }
});

export default SegSocial;
