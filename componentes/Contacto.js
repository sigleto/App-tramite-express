import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'; // Asumiendo que estás utilizando React Navigation

const Contacto = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  
  const accion = async (data) => {
    try {
      await fetch('https://tramites-expo-m2x2.vercel.app/Contacto', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Datos enviados correctamente');
      reset();
      navigation.navigate('Home'); // Reemplaza 'Inicio' con el nombre de tu ruta de inicio
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.campos}>
            <Text>Alias</Text>
            <TextInput
              placeholder="Introduce tu alias"
              onChangeText={field.onChange}
              value={field.value}
            />
          </View>
        )}
        name="alias"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.campos}>
            <Text>E-Mail</Text>
            <TextInput
              placeholder="Sólo si quieres que te contestemos"
              onChangeText={field.onChange}
              value={field.value}
              style={styles.inputc}
            />
          </View>
        )}
        name="correo"
        rules={{
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
            message: 'Eso no es un correo válido',
          },
        }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <View style={[styles.campos, styles.comentarios]}>
            <Text>COMENTARIOS</Text>
            <TextInput
              placeholder="Puedes informarnos de algún trámite u organismo que deseas que incluyamos, corrección o sugerencia"
              onChangeText={field.onChange}
              value={field.value}
              multiline
            />
          </View>
        )}
        name="comentarios"
        defaultValue=""
      />
      <TouchableOpacity onPress={handleSubmit(accion)} style={styles.enviando}>
        <Text>ENVIAR DATOS</Text>
      </TouchableOpacity>
      {errors.correo?.type === 'pattern' && (
        <View>
          <Text>Eso no es un correo válido</Text>
        </View>
      )}
      <Image source={require('../assets/contacto.jpg')} style={styles.gatito} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  campos: {
    marginBottom: 20,
  },
  inputc: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  comentarios: {
    height: 100,
  },
  enviando: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  gatito: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default Contacto;
