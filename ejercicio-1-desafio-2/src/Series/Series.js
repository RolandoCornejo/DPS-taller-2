import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, SafeAreaView, Pressable, Linking, Alert } from 'react-native';
import * as series from './informacion.json';
const comedia = series.comedia;
const aventura = series.aventura;
const fantasia = series.fantasia;

function Item({ item }) {
  return (
    <>
    <Pressable onPress={() => { videoPlayer(item.url);}} >
    <View style={styles.listItem}>
      <View style={styles.caratula}>
      <Image source={{uri:item.image}}  style={styles.foto} />
      </View>
      <View style={{alignSelf:"center",flex:1}}>
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.temps}>Temporadas: {item.seasons}</Text>
      </View>
    </View>
    </Pressable>
    </>
  );
}

async function videoPlayer(url){
  const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }


export default class App extends React.Component {
  render(){
    return (
      <>
      <View>
      <Text style={styles.name}>Comedia</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={comedia}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item?.id}
        />
      </View>
      <View>
      <Text style={styles.name}>Aventura</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={aventura}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item?.id}
        />
      </View>
      <View>
      <Text style={styles.name}>Fantasía</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={fantasia}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item?.id}
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222730',
  },
  listItem:{
    margin:5,
    paddingVertical: 10,
    paddingHorizontal:20,
    backgroundColor:"white",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    marginHorizontal: 15,
    marginVertical: 5
  },
  titulo: {
    color: '#000',
    fontFamily: 'WorkSans-SemiBold',
    fontWeight:"bold", 
    fontSize: 18,
  },
  temps: {
    color: '#000',
    fontWeight:"bold", 
    fontFamily: 'Poppins-Light',
    fontSize: 12
  },
  foto: { 
    width:60, 
    height:80,
  },
  caratula: {
  marginRight: 15,
  shadowColor: '#202020',
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 5,
  }
});