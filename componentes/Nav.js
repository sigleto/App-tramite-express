import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";


import Home from './Home';
import Presentacion from './Presentacion';
import Organismos from './Organismos';
import Contacto from './Contacto';
import AEAT from './Enlaces/AEAT'
import Catastro from './Enlaces/Catastro'
import Justicia from './Enlaces/Justicia'
import PoliciaNacional from './Enlaces/PoliciaNacional'
import SegSocial from './Enlaces/SeguridadSocial';
import Trafico from './Enlaces/Trafico'
import { AvisoAEAT1, AvisoAEAT2, AvisoAEAT3, AvisoAEAT4, AvisoAEAT5, AvisoAEAT6 } from './Avisos/AvisosAEAT'
import { AvisoPolicia } from './Avisos/AvisosPolicia';
import { AvisoJusticia } from './Avisos/AvisosJusticia'
import { AvisoCatastro1,AvisoCatastro2 } from './Avisos/AvisosCatastro';
import { AvisosTrafico1, AvisosTrafico2, AvisosTrafico3, AvisosTrafico4, AvisosTrafico5 } from './Avisos/AvisosTrafico';
import { AvisoSegSocial1, AvisoSegSocial2 } from './Avisos/AvisosSegSocial'




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function OrganismosStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Organismos" component={Organismos}options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home}options={{ headerShown: false }} />
      <Stack.Screen name="Presentacion" component={Presentacion} options={{ headerShown: false }} />
      <Stack.Screen name="AEAT" component={AEAT} options={{ headerShown: false }} />
      <Stack.Screen name="Catastro" component={Catastro} options={{ headerShown: false }} />
      <Stack.Screen name="Justicia" component={Justicia} options={{ headerShown: false }} />
      <Stack.Screen name="PoliciaNacional" component={PoliciaNacional} options={{ headerShown: false }} />
      <Stack.Screen name="SegSocial" component={SegSocial} options={{ headerShown: false }} />
      <Stack.Screen name="Trafico" component={Trafico} options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT1" component={AvisoAEAT1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT2" component={AvisoAEAT2}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT3" component={AvisoAEAT3}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT4" component={AvisoAEAT4}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT5" component={AvisoAEAT5}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT6" component={AvisoAEAT6}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoPolicia" component={AvisoPolicia}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoJusticia" component={AvisoJusticia}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoCatastro1" component={AvisoCatastro1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoCatastro2" component={AvisoCatastro2}options={{ headerShown: false }} />
      <Stack.Screen name="AvisosTrafico1" component={AvisosTrafico1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisosTrafico2" component={AvisosTrafico2}options={{ headerShown: false }} />
      <Stack.Screen name="AvisosTrafico3" component={AvisosTrafico3}options={{ headerShown: false }} />
      <Stack.Screen name="AvisosTrafico4" component={AvisosTrafico4}options={{ headerShown: false }} />
      <Stack.Screen name="AvisosTrafico5" component={AvisosTrafico5}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoSegSocial1" component={AvisoSegSocial1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoSegSocial2" component={AvisoSegSocial2}options={{ headerShown: false }} />


    </Stack.Navigator>
  );
}

const Nav = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue', // Color de la pestaña activa
          tabBarInactiveTintColor: '#7a3105', // Color de la pestaña inactiva
          tabBarLabelStyle: styles.tabLabel, // Estilo de la etiqueta de la pestaña
          tabBarStyle: styles.tabBar, // Estilo de la barra de pestañas
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'INICIO', tabBarIcon: () => (
            <MaterialCommunityIcons name="home"  size={26} />), headerShown: false}}
        />
        <Tab.Screen
          name="Organismos"
          component={OrganismosStack}
          options={{ tabBarLabel: 'ORGANISMOS',tabBarIcon: () => (
            <MaterialCommunityIcons name="office-building"  size={26} />),  headerShown: false }}
        />
        <Tab.Screen
          name="Contacto"
          component={Contacto}
          options={{ tabBarLabel: 'CONTACTO', tabBarIcon: () => (
            <MaterialCommunityIcons name="contacts"  size={26} />
          ), headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo del contenedor
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  tabBar: {
    backgroundColor: 'lightgray', // Color de fondo de la barra de pestañas
    borderTopWidth: 1, // Grosor de la línea superior
    borderColor: 'gray', // Color de la línea superior
    height: 75,
    backgroundColor:'#d1fa95'
  },
});

export default Nav;


