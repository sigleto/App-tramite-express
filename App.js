import React from 'react';
import { View, StyleSheet } from 'react-native';
import Nav from './componentes/Nav'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './componentes/Home';



const App = () => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Nav/>
      
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;