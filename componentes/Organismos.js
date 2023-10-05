import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Organismos = () => {
  const navigation = useNavigation();

  const navigateToOrganismo = (ruta) => {
    navigation.navigate(ruta);
  };

  const opciones = [
    { nombre: 'A E A T', ruta: 'AEAT' },
    { nombre: 'Seguridad Social', ruta: 'SegSocial' },
    { nombre: 'Policía Nacional', ruta: 'PoliciaNacional' },
    { nombre: 'Tráfico', ruta: 'Trafico' },
    { nombre: 'Justicia', ruta: 'Justicia' },
    { nombre: 'Catastro', ruta: 'Catastro' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.tituloOrg}>¿En qué organismo deseas ingresar?</Text>
      <View style={styles.organismos}>
        {opciones.map((opcion) => (
          <TouchableOpacity
            key={opcion.ruta}
            style={styles.opcion}
            onPress={() => navigateToOrganismo(opcion.ruta)}
          >
            <Text style={styles.opcionTexto}>{opcion.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloOrg: {
    fontSize: 20,
    marginBottom: 20,
  },
  organismos: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  opcion: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  opcionTexto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Organismos;

