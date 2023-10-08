import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MUFACE = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/MUFACE.png')} style={styles.image} />
      <Text style={styles.titulo}>Servicios de MUFACE</Text>

      <View style={styles.serviciosList}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoMUFACE1")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>TALONARIO DE RECETAS</Text>
        </TouchableOpacity><TouchableOpacity style={styles.item} onPress={() => openLink('https://www.muface.es/muface_Home/encuentra-tu-medico/catalogo-medicos-y-servicios.html')}>
          <Text style={styles.itemText}>ENCUENTRA TU MÉDICO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => openLink('https://ssweb.seap.minhap.es/icpplus/citar?org=MUFACE')}>
          <Text style={styles.itemText}>CITA PREVIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoMUFACE3")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>PRESTACIONES DENTARIAS Y OCULARES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoMUFACE2")}>
          <Text style={styles.itemText}><Text style={styles.arroba}>@</Text>TARJETA SANITARIA EUROPEA</Text>
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

export default MUFACE;