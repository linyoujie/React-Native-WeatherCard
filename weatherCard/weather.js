import React, { Component } from 'react';
import { FlatList } from 'react-native';
import WeatherCard from './weatherView';
import { AsyncStorage,StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import '../config.js';


export default class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today_date: parseInt(new Date().getTime() / 1000),
      latitude: this.props.glolatitude,
      longitude: this.props.glolongitude,
      today_weather: [],
      next_three_day_weather: null,
      error: '',
      loading: true,
    };
  }
 

  componentDidMount() {
    this.getWeather();

  }



  getWeather() {
    let five_day_api =
      'https://api.openweathermap.org/data/2.5/forecast?lat=' +
      this.props.glolatitude +
      '&lon=' +
      this.props.glolongitude +
      '&units=Imperial&APPID=' + weatherapi;

    let today_api =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      this.props.glolatitude +
      '&lon=' +
      this.props.glolongitude +
      '&units=Imperial&APPID=' + weatherapi;
    this.setState({
      loading: true,
    });
    fetch(today_api)
      .then(response => response.json())
      .then(data => {
        this.setState({
          today_weather: data,
        });
      })
      .then(() => {
        fetch(five_day_api)
          .then(response => response.json())
          .then(data => {
            //console.log(five_day_api)
            this.setState({
              next_three_day_weather: [
                data.list[0],
                data.list[9],
                data.list[17],
              ],
              loading: false,
            });
          })
          .done();
      })
      .done();
  }

  render() {
    if (this.state.loading) {
      return <Text></Text>;
    }
    return (
      <WeatherCard
        detail={this.state.today_weather}
        location={this.state.today_weather.name}
        next_three_day_weather={this.state.next_three_day_weather}
        theme = {}
      />
    );
  }
}


const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',

  },
  container: {
    flexDirection: 'row',
    //paddingTop: 15,
    paddingRight: 25,
    backgroundColor: 'white',
  },
  containerPhone: {

    //paddingTop: 15,

    backgroundColor: 'black',
  },
  leftColumn: {
    width: 100,
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  handle: {
    marginRight: 3,
  },
  dot: {
    fontSize: 3,
  },
  image: {
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12,
  },
  timeText: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
  },
  daysText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
});