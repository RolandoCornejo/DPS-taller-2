import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  BlurView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pelicula from './src/Peliculas/Peliculas.js';
import Serie from './src/Series/Series.js';
import { WebView } from 'react-native-webview';

function Peliculas() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Pelicula />
      </ScrollView>
    </View>
  );
}

function Proximamente() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          html:
            '<iframe width="960" height="515" src="https://www.youtube.com/embed/oqxAJKy0ii4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }}
      />
      <Text style={styles.titulo}>El Juego del Calamar</Text>
      <Text style={styles.tipo}>Tipo: Serie</Text>
      <Text style={styles.fecha}>Fecha de estreno: 10/10/2021</Text>
      <Text style={styles.descrip}>
        Cientos de jugadores cortos de dinero aceptan una extraña invitación a
        competir en juegos infantiles. Adentro les aguardan un premio
        irresistible... y un riesgo mortal.
      </Text>

      <WebView
        source={{
          html:
            '<iframe width="960" height="515" src="https://www.youtube.com/embed/ARndffYb3N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }}
      />
      <Text style={styles.titulo}>Culpables</Text>
      <Text style={styles.tipo}>Tipo: Película</Text>
      <Text style={styles.fecha}>Fecha de estreno: 01/02/2022</Text>
      <Text style={styles.descrip}>
        Un oficial de policía llamado Joe Bayler, que se ve obligado a trabajar
        como operador de emergencias tras de un incidente mientras cumplía sus
        deberes como la autoridad.
      </Text>

      <WebView
        source={{
          html:
            '<iframe width="960" height="515" src="https://www.youtube.com/embed/iDvPvqImb-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }}
      />
      <Text style={styles.titulo}>The Billion Dollar Code</Text>
      <Text style={styles.tipo}>Tipo: Miniserie</Text>
      <Text style={styles.fecha}>Fecha de estreno: 12/03/2022</Text>
      <Text style={styles.descrip}>
        Un artista y un hacker de Berlín inventaron una nueva forma de mirar el
        mundo en los 90. Años más tarde, se reúnen para demandar a Google por la
        infracción de su patente.
      </Text>
    </View>
  );
}

function Series() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Serie />
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Plataforma() {
  let [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./src/fonts/Poppins-SemiBold.ttf'),
    'WorkSans-SemiBold': require('./src/fonts/WorkSans-SemiBold.ttf'),
    'Poppins-Light': require('./src/fonts/Poppins-ExtraLight.ttf'),
  });

  return (
    <Tab.Navigator
      initialRouteName="Peliculas"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#ff8946',
        inactiveBackgroundColor: '#1c1f29',
        style: {
          backgroundColor: '#1c1f29',
        },
      }}>
      <Tab.Screen
        name="Peliculas"
        component={Peliculas}
        options={{
          headerStyle: { backgroundColor: '#1c1f29' },
          headerTitleStyle: { color: '#fff', fontFamily: 'Poppins-SemiBold' },
          tabBarLabelStyle: { fontFamily: 'Poppins-Light' },
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="filmstrip"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          headerStyle: { backgroundColor: '#1c1f29' },
          headerTitleStyle: { color: '#fff', fontFamily: 'Poppins-SemiBold' },
          tabBarLabelStyle: { fontFamily: 'Poppins-Light' },
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="video-vintage"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Próximamente"
        component={Proximamente}
        options={{
          headerStyle: { backgroundColor: '#1c1f29' },
          headerTitleStyle: { color: '#fff', fontFamily: 'Poppins-SemiBold' },
          tabBarLabelStyle: { fontFamily: 'Poppins-Light' },
          tabBarLabel: 'Próximamente',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-filter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Plataforma />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#222730',
  },
  titulo: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  tipo: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  fecha: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  descrip: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
    textAlign: 'justify',
    padding: 15,
  },
});
