import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function Weather(props) {
  return (
    <View>
      {props.weather ? (
        <View style={styles.weatherstyl}>
          <Text style={styles.title}>
            <Icon1 name="location-arrow" size={25} /> {props.weather.municipio}
          </Text>
          <Text style={styles.subtitle}>{props.weather.tipo}</Text>
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: `http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={[styles.subtitle, { fontSize: 20 }]}>
                Temperatura:
              </Text>
              <Text style={styles.temp}> {props.weather.temperature}°C</Text>
              <Text style={styles.subtitle}>
                {props.weather.min}°C <Icon2 name="arrowdown" /> / {props.weather.max}°C{' '}
                <Icon2 name="arrowup" />
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Humedad</Text>
              <Text style={[styles.temp, { fontSize: 20 }]}>
                {props.weather.humidity}%
              </Text>
              <Text style={{ color: 'white' }}>Velocidad del viento</Text>
              <Text style={[styles.temp, { fontSize: 20 }]}>
                {parseFloat((props.weather.wind / 1000) * 3600).toFixed(2)} km/h
              </Text>
              <Text style={[styles.temp, { fontSize: 20 }]}>
                {props.weather.windD == 0
                  ? 'E'
                  : props.weather.windD == 90
                  ? 'N'
                  : props.weather.windD == 180
                  ? 'O'
                  :props.weather.windD == 270
                  ? 'S'
                  : props.weather.windD < 90
                  ? 'NE'
                  : props.weather.windD < 180
                  ? 'NO'
                  : props.weather.windD < 270
                  ? 'SO'
                  : 'SE'}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.weatherstyl}>
          <Text style={styles.title}>Seleccione la ciudad que desea ver</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  weatherstyl: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 50,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
