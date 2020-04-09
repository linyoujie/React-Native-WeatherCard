import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import WeatherTab from './weatherTab';
import WeatherIcon from './weatherIconMap';

export default class WeatherCard extends Component {


  render() {

    const { detail, location, next_three_day_weather } = this.props;
    const styles = StyleSheet.create({
      card: {
        borderWidth: 0,
        borderRadius: 20,

      },
      icon: {
        width: 100,
        height: 100,

      },
      degree: {
        fontSize: 28,
        color: 'black',
        fontWeight: "bold"

      },
      location: {
        fontSize: 18,
        textTransform: 'capitalize',
        color: 'black'
      },
      notes: {
        fontSize: 16,
        textTransform: 'capitalize',
        color: 'black'

      },
      views: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

      },
      date_view: {
        flexDirection: 'column',
        alignItems: 'center',

      },
      horizontal: {
        backgroundColor: '#dfe6e9',
        marginVertical: 20,

      },
      tab: {
        alignItems: 'center',
      },
    });
    return (
      <Card containerStyle={this.props.theme.card}>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.views} marginTop = {10}>
          <WeatherIcon wid={detail.weather[0].id} size={80}  color = 'black'/>
          <View style={styles.date_view} >
            <Text style={styles.degree}>
              {Math.round(detail.main.temp)}&#8457;
            </Text>
            <Text style={styles.notes}>{detail.weather[0].description}</Text>
            <Text style={styles.notes}>
              {Math.round(detail.main.temp_max)}°/{Math.round(detail.main.temp_min)}°
            </Text>
          </View>
        </View>

        <Divider style={styles.horizontal} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            
          }}
        >
          <WeatherTab
            day={new Date(next_three_day_weather[0].dt * 1000).getDay()}
            wid={next_three_day_weather[0].weather[0].id}
            max_={Math.round(next_three_day_weather[0].main.temp_max)}
            min_={Math.round(next_three_day_weather[0].main.temp_min)}
            color={this.props.theme.daysText.color}
          />
          <WeatherTab
            day={new Date(next_three_day_weather[1].dt * 1000).getDay()}
            wid={next_three_day_weather[1].weather[0].id}
            max_={Math.round(next_three_day_weather[1].main.temp_max)}
            min_={Math.round(next_three_day_weather[1].main.temp_min)}
            color={this.props.theme.daysText.color}
          />
          <WeatherTab
            day={new Date(next_three_day_weather[2].dt * 1000).getDay()}
            wid={next_three_day_weather[2].weather[0].id}
            max_={Math.round(next_three_day_weather[2].main.temp_max)}
            min_={Math.round(next_three_day_weather[2].main.temp_min)}
            color={this.props.theme.daysText.color}
          />
        </View>
      </Card>
    );
  }
}

