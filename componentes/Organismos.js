import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';


const Organismos = () => {
  const navigation = useNavigation();
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-9777143216104753/6640854954';
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
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
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
    marginTop:70,
    textAlign:'center',
    color:'#54722e',
    textDecorationLine:'underline'
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

