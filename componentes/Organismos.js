import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
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
    { nombre: 'S E P E', ruta: 'SEPE' },
    { nombre: 'M U F A C E', ruta: 'MUFACE' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloOrg}>Elige el organismo al que deseas acceder</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  tituloOrg: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:90,
    textAlign:'center',
    color:'olive',
  },
  organismos: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  opcion: {
    display:'flex',
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width:250,
    alignItems:'center'
  },
  opcionTexto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Organismos;

