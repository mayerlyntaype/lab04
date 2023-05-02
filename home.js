import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    
      <View style={styles.main}>
        <Text style={styles.mainTitle}>Perrihome</Text>

        <Image source={{uri: 'https://uploads-ssl.webflow.com/63634f4a7b868a399577cf37/63e10adfa64a34de9592b9a3_nombres%20para%20perritos%20blancos.jpg'}} style={styles.image} />
        <TextInput style={styles.input} placeholder="Ingrese su nombre" />
        <TextInput style={styles.input} placeholder="Ingrese su apellido" />
        <Button title="Entrar" />
      
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
 
   
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#EDEDED',
    padding: 20,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  main: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '50%',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
