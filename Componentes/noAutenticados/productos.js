import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
//import { NavigationContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack'
import {StackNavigator} from 'react-navigation';



export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.uno}>
          <Text>  Collares  </Text>
          <Image source={{uri: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/15665/production/_107435678_perro1.jpg'}}
         style={{width: 150, height: 150}} />
          <Text>  collar para perro pequeño  </Text>
          <Text> precio: $$$$$$$</Text>
          <Button title="Añadir a carrito" />
        </View>

        <View style={styles.dos}>
          <Text>  clothes para my favorite pet  </Text>
          <Image source={{uri: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/15665/production/_107435678_perro1.jpg'}}
         style={{width: 150, height: 150}} />
       <Text>  ropa para perro pequeño  </Text>
          <Text> precio: $$$$$$$</Text>
          <Button title="Añadir a carrito" />
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
     flex: 2,
     justifyContent: "center",
     alignItems: "center"
  },
  dos:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }

});
