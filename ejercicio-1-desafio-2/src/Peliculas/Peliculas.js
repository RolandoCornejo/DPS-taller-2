import React, { useRef, useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Dimensions, Image, Pressable, Linking, Alert, ScrollView, FlatList, Modal, Button } from 'react-native';
import { WebView } from 'react-native-webview';


import * as pelis from './informacion.json';

const  comedia = pelis.comedia;
const  romance = pelis.romance;
const  accion = pelis.accion;


export default function Pelicula() {

  async function videoPlayer(url){
  const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
 
  return (
    <>

    <View>
      <Text style={styles.name}>Comedia</Text>
    </View>
    <View style={styles.container}>
      <ScrollView horizontal>
        {comedia.map((pcomedia, i) => (
        <View style={styles.container} >
          <View key={i}>
          <TouchableHighlight onPress={() => { videoPlayer(pcomedia.url); }}>
            <Image style={styles.imagenes} source={{ uri: pcomedia.image }}/>
            </TouchableHighlight>
          </View>
        </View>
          ))}
      </ScrollView>
    </View>
    <View>
      <Text style={styles.name}>Romance</Text>
    </View>
    <View style={styles.container}>
      <ScrollView horizontal>
        {romance.map((promance, i) => (
        <View style={styles.container} >
          <View key={i}>
          <TouchableHighlight onPress={() => { videoPlayer(promance.url); }}>
            <Image style={styles.imagenes} source={{ uri: promance.image }}/>
          </TouchableHighlight>
          </View>
        </View>
          ))}
      </ScrollView>
    </View>
    <View>
      <Text style={styles.name}>Acción</Text>
    </View>
    <View style={styles.container}>
      <ScrollView horizontal>
        {accion.map((paccion, i) => (
        <View style={styles.container} >
          <View key={i}>
          <TouchableHighlight onPress={() => { videoPlayer(paccion.url); }}>
            <Image style={styles.imagenes} source={{ uri: paccion.image }}/>
            </TouchableHighlight>
          </View>
        </View>
          ))}
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  imagenes: {
    height:190,
    width:130,
    marginHorizontal: 3
  },
});