import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Presentacion1 from './Presentacion/Presentacion1';
import Presentacion2 from './Presentacion/Presentacion2';
import Presentacion3 from './Presentacion/Presentacion3';
import Organismos from './Organismos';
import Contacto from './Contacto';
import AEAT from './Enlaces/AEAT';
import SEPE from './Enlaces/SEPE';
import MUFACE from './Enlaces/MUFACE';
import Catastro from './Enlaces/Catastro';
import Justicia from './Enlaces/Justicia';
import PoliciaNacional from './Enlaces/PoliciaNacional';
import SegSocial from './Enlaces/SeguridadSocial';
import Trafico from './Enlaces/Trafico'
import { AvisoAEAT1, AvisoAEAT2, AvisoAEAT3, AvisoAEAT4, AvisoAEAT5, AvisoAEAT6 } from './Avisos/AvisosAEAT'
import { AvisoPolicia } from './Avisos/AvisosPolicia';
import { AvisoJusticia } from './Avisos/AvisosJusticia'
import { AvisoCatastro1,AvisoCatastro2 } from './Avisos/AvisosCatastro';
import { AvisosTrafico1, AvisosTrafico2, AvisosTrafico3, AvisosTrafico4, AvisosTrafico5 } from './Avisos/AvisosTrafico';
import { AvisoSegSocial1, AvisoSegSocial2 } from './Avisos/AvisosSegSocial'
import { AvisoSEPE1, AvisoSEPE2 } from './Avisos/AvisoSEPE'
import { AvisoMUFACE1, AvisoMUFACE2,AvisoMUFACE3 } from './Avisos/AvisosMUFACE'
import PoliticaPrivacidad from './PoliticaPrivacidad';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export function OrganismosStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="OrganismosStack" component={Organismos}options={{ headerShown: false }} />
      <Stack.Screen name="AEAT" component={AEAT} options={{ headerShown: false }} />
      <Stack.Screen name="SEPE" component={SEPE} options={{ headerShown: false }} />
      <Stack.Screen name="MUFACE" component={MUFACE} options={{ headerShown: false }} />
      <Stack.Screen name="Catastro" component={Catastro} options={{ headerShown: false }} />
      <Stack.Screen name="Justicia" component={Justicia} options={{ headerShown: false }} />
      <Stack.Screen name="PoliticaProvacidad" component={PoliticaPrivacidad} options={{ headerShown: false }} />
      <Stack.Screen name="PoliciaNacional" component={PoliciaNacional} options={{ headerShown: false }} />
      <Stack.Screen name="SegSocial" component={SegSocial} options={{ headerShown: false }} />
      <Stack.Screen name="Trafico" component={Trafico} options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT1" component={AvisoAEAT1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT2" component={AvisoAEAT2}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT3" component={AvisoAEAT3}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT4" component={AvisoAEAT4}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT5" component={AvisoAEAT5}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoAEAT6" component={AvisoAEAT6}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoSEPE1" component={AvisoSEPE1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoMUFACE1" component={AvisoMUFACE1}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoMUFACE2" component={AvisoMUFACE2}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoMUFACE3" component={AvisoMUFACE3}options={{ headerShown: false }} />
      <Stack.Screen name="AvisoSEPE2" component={AvisoSEPE2}options={{ headerShown: false }} />
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
export function PresentacionStack() {
  return (
    <Stack.Navigator
      initialRouteName="Presentacion1"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: { animation: "timing", config: { duration: 500 } },
          close: { animation: "timing", config: { duration: 500 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
      <Stack.Screen
        name="Presentacion1"
        component={Presentacion1}
        options={() => ({headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Presentacion2"
        component={Presentacion2}
        options={() => ({headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Presentacion3"
        component={Presentacion3}
        options={() => ({headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    </Stack.Navigator>
  );
}




export function PrincipalStack(){
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{  headerShown: false}}
        />
        <Stack.Screen
          name="Organismos"
          component={OrganismosStack}
          options={{  headerShown: false }}
        />
        <Stack.Screen
          name="Contacto"
          component={Contacto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Politica"
          component={PoliticaPrivacidad}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
  );
};

const Drawer=createDrawerNavigator()
export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contacto" component={Contacto} />
      <Drawer.Screen name="PresentacionStack" component={PresentacionStack} />
      <Drawer.Screen
        name="PoliticaPrivacidad"
        component={() => {
          Linking.openURL(
            'https://docs.google.com/document/d/1WeAEvL7FxXA_O4_zxrsrNYAwIotUXOKZeOv_mMZOV-c/edit'
          );
          return null;
        }}
      />
    </Drawer.Navigator>
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



