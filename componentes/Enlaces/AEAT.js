import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AEAT = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/AEAT.jpg')} style={styles.image} />
      <Text style={styles.titulo}>Servicios de la AEAT</Text>

      {/* Sección para trámites que requieren Clave Móvil */}
      <View style={styles.section}>
        <Text style={styles.subHeading}>Trámites que requieren Cl@ve Móvil:</Text>
        <View style={styles.serviciosList}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT2")}>
            <Text style={styles.itemText}>Consulta de deudas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT3")}>
            <Text style={styles.itemText}>Consulta de la declaración de IRPF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT5")}>
            <Text style={styles.itemText}>
              Gestión modelo 140 (Abono anticipado deducción por maternidad)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT6")}>
            <Text style={styles.itemText}>
              Gestión modelo 143 (Abono anticipado por deducción de familia numerosa/ascendientes con dos hijos/Personas con discapacidad a cargo)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT1")}>
            <Text style={styles.itemText}>Presentación de escrito sin comunicación previa</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sección para trámites que no requieren Clave Móvil */}
      <View style={styles.section}>
        <Text style={styles.subHeading}>Trámites que no requieren Cl@ve Móvil:</Text>
        <View style={styles.serviciosList}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AvisoAEAT4")}>
            <Text style={styles.itemText}>Contestación a una comunicación de la Agencia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("WebPageScreen", { url: 'https://www2.agenciatributaria.gob.es/wlpl/TOCP-MUTE/internet/identificacion' })}>
            <Text style={styles.itemText}>Petición de cita previa</Text>
          </TouchableOpacity>
        </View>
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
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
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

export default AEAT;
