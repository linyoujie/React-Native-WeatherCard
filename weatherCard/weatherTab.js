import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import WeatherIcon from './weatherIconMap';

export default class WeatherTab extends Component {
  render() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { day, wid, max_, min_ } = this.props;

    const styles = StyleSheet.create({
      tab: {
        flexDirection: 'column',
        alignItems: 'flex-start',


      },
      weather: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: this.props.color,
      },
      image: { width: 40, height: 40 },
      temp: {
        flexDirection: 'column',
        alignItems: 'center',
        color: this.props.color
      },
      hi_texts: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: this.props.color,
        fontWeight: "bold",
        marginLeft: 8
      },
      lo_texts: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: this.props.color,
        marginLeft: 15
      },
    });
    return (
      <View style={styles.tab}>
        <Text style={{ color: this.props.color }}>{days[day]} </Text>
        <View style={styles.weather} marginTop = {10} >
          <WeatherIcon wid={wid} size={38}  color = {this.props.color} />
          <View style={styles.temp}>
            <Text style={styles.hi_texts}>{max_}°</Text>
            <Text style={styles.lo_texts}>{min_}°</Text>
          </View>
        </View>
      </View>
    );
  }
}

