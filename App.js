import React from 'react';
import { View, StyleSheet } from 'react-native';
import Nav from './componentes/Nav'




const App = () => {
  return (
    <View style={styles.container}>
      <Nav />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;