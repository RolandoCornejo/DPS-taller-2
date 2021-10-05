import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Picker } from '@react-native-community/picker';
import { Spinner } from 'react-native-loading-spinner-overlay';
import Weather from './components/Weather'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [selectedCity, setSelectedCity] = useState();
  const [weather, setWeather] = useState();
  //e2c20c609d575ebb1a059a1b37ff4fd1
  //Aguilares, , , Ciudad Delgado, , , , , ,, , , , , San Salvador, , Santo Tomás, Soyapango, Tonacatepeque.
  const apiKey = 'b82e39e394008dddb9336e1f984b9c64';
  async function getWeather(id) {
    setSelectedCity(id);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b82e39e394008dddb9336e1f984b9c64&lang=sp&units=metric`
      );
      const json = await response.json();
      const newWeather = {
        municipio: json.name,
        tipo: json.weather[0].description,
        icon: json.weather[0].icon,
        temperature: json.main.temp,
        min: json.main.temp_min,
        max: json.main.temp_max,
        humidity: json.main.humidity,
        wind: json.wind.speed,
        windD: json.wind.deg,
      };
      setWeather(newWeather);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Picker
          style={styles.picker}
          selectedValue={selectedCity}
          onValueChange={(id) => getWeather(id)}>
          <Picker.Item label="Aguilares" value="3587428" />
          <Picker.Item label="Apopa" value="3587345" />
          <Picker.Item label="Ayutuxtepeque" value="3587308" />
          <Picker.Item label="Ciudad Delgado" value="3586814" />
          <Picker.Item label="Cuscatancingo" value="3586833" />
          <Picker.Item label="El Paisnal" value="3586204" />
          <Picker.Item label="Guazapa" value="3585636" />
          <Picker.Item label="Ilopango" value="3585484" />
          <Picker.Item label="Mejicanos" value="3584399" />
          <Picker.Item label="Nejapa" value="3583127" />
          <Picker.Item label="Panchimalco" value="3584156" />
          <Picker.Item label="Rosario de Mora" value="3583937" />
          <Picker.Item label="San Marcos" value="3583480" />
          <Picker.Item label="San Martín" value="3583471" />
          <Picker.Item label="San Salvador" value="3583361" />
          <Picker.Item label="Santiago Texacuangos" value="3583194" />
          <Picker.Item label="Santo Tomás" value="3583183" />
          <Picker.Item label="Soyapango" value="3583096" />
          <Picker.Item label="Tonacatepeque" value="3582918" />
        </Picker>
      </View>
      <Weather weather={weather}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight | 20,
    backgroundColor: '#5ea4ff',
  },
  picker: {
    padding: 10,
    textAlign: 'center',
    borderColor: '#b5b5b5',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  
});
