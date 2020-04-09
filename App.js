import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherApp from './weatherCard/weather';
export default function App() {
  return (
    <View>
      <Text style={{marginTop:20}}>  </Text>
      <WeatherApp glolongitude = '-122.0839' glolatitude = '37.3861'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
