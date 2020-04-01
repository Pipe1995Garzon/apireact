import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
//import {rutasnoautenticadas} from './Componentes/noAutenticados/rutasnoautenticadas'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.uno}>
        <Image source={{uri: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/15665/production/_107435678_perro1.jpg'}}
       style={{width: 150, height: 150}} />
        <Text>  Veterinaria my dogs  </Text>
      </View>

      <View style={styles.dos}>
        <Text> usuario </Text>
        <TextInput  id="usuario"/>
        <Text> clave </Text>
        <TextInput  id="clave"/>
        <Button title="Ingresar" />
      </View>


    <View style={styles.tres}>
      <Text>footer</Text>
    </View>

  </View>
  );
}


const styles = StyleSheet.create({
  container: {
     flex: 1
  },
  uno:{
     flex: 2,
     justifyContent: "center",
     alignItems: "center"
  },
  dos:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  tres:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
