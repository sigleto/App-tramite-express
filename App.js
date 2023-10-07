import React from 'react';
import { View, StyleSheet } from 'react-native';
import Nav from './componentes/Nav'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PresentacionStack } from './componentes/Nav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {


  return (
   
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
     
      <Stack.Navigator initialRouteName="PresentacionStack" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PresentacionStack" component={PresentacionStack} />
          <Stack.Screen name="Nav" component={Nav} />
       </Stack.Navigator>
           
   </NavigationContainer>
   </GestureHandlerRootView>
   )
   }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;