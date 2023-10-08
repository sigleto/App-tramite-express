import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Justicia = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/justicia.png')} style={styles.image} />
      <Text style={styles.titulo}>Servicios de Justicia</Text>

      <View style={styles.serviciosList}>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=NAC&idtramite=102&lang=es_es&idpagina=1215197884559')}>
          <Text style={styles.itemText}>CERTIFICADO DE NACIMIENTO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=DEF&idtramite=105&lang=es_es&idpagina=1215197884559')}>
          <Text style={styles.itemText}>CERTIFICADO DE DEFUNCIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.mjusticia.gob.es/certur/ConsultaEstadoSolicitud?lang=es_es&idpagina=1215197884559&idtramite=1288778398757')}>
          <Text style={styles.itemText}>CERTIFICADO DE ACTOS DE ÚLTIMA VOLUNTAD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=MAT&idtramite=101&lang=es_es&idpagina=1215197884559')}>
          <Text style={styles.itemText}>CERTIFICADO DE MATRIMONIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoJusticia")}>
          <Text style={styles.itemText}>CITA PREVIA PARA REGISTRO CIVIL</Text>
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

export default Justicia;
