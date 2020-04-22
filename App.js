import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
export default class App extends Component<Props> {

  state ={
    data:[]
  }

  fetchData= async()=>{
    //const response = await fetch('http://192.168.56.1:3000/');
    const response = await fetch('http://localhost:3000/');
    const principal = await response.json();
    console.log(response);
    console.log(principal);


    this.setState({data:principal});

  }
componentDidMount(){
  this.fetchData();
    console.log('holiss');
}

  render() {
    return (
      <View>
       <Text>My dogs</Text>

         <FlatList data={this.state.data} keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
          <View>
            <Text>{item.mensaje1}</Text>
            <Text>{item.mensaje2}</Text>
            <Text>hola</Text>
           </View>

         }
         />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
});
