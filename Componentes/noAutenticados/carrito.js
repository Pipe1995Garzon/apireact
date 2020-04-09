import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
//import { NavigationContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack'
import {StackNavigator} from 'react-navigation';



export default class Carrito extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.uno}>
          <Image source={{uri: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/15665/production/_107435678_perro1.jpg'}}
         style={{width: 150, height: 150}} />
       <Text>  shampoo mypets  </Text>
       <Text>  ayuda a combatir las pulgas y los malos olores </Text>
          <Button title="quitar de carrito" />
          <Button title="comprar" />
        </View>

        <View style={styles.dos}>

        </View>


      <View style={styles.tres}>

      </View>

    </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
     flex: 1
  },
  uno:{
     flex: 6,
     justifyContent: "center",
     alignItems: "center",

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
