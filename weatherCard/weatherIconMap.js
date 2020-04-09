import React, { Component } from 'react';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from './weatherIcon'
export default class WeatherIcon extends Component {
  render() {
    const { color } =  this.props;
    const { wid, size } = this.props;
    var hr = new Date().getHours();
    if (hr > 6 && hr < 19) {
      switch (true) {
        case wid >= 200 && wid <= 232:
          return <Icon name="wi-day-thunderstorm" size={size} color={color} />;
        case wid >= 300 && wid <= 321:
          return <Icon name="wi-rain-mix" size={size} color={color} />;
        case wid >= 500 && wid <= 531:
          return <Icon name="wi-day-rain-mix" size={size} color={color}/>;
        case wid >= 600 && wid <= 622:
          return <Icon name="wi-day-snow" size={size} color={color} />;
        case wid == 701:
        case wid == 762:
        case wid == 771:
          return <Icon name="wi-windy" size={size} color={color} />;
        case wid == 711:
          return <Icon name="wi-smoke" size={size} color={color} />;
        case wid == 721:
          return <Icon name="wi-day-haze" size={size} color={color} />;
        case wid == 731:
        case wid == 751:
        case wid == 761:
          return <Icon name="wi-dust" size={size} color={color} />;
        case wid == 741:
          return <Icon name="wi-day-fog" size={size} color={color} />;
        case wid == 781:
          return <Icon name="wi-tornado" size={size} color={color} />;
        case wid == 800:
          return <Icon name="wi-day-sunny" size={size} color={color} />;
        case wid == 801:
          return <Icon name="wi-day-cloudy" size={size} color={color} />;
        case wid == 802:
          return <Icon name="wi-cloud" size={size} color={color} />;
        case wid == 803 || wid == 804:
          return <Icon name="wi-cloudy" size={size} color={color} />;
        default:
          return <Icon name="alien" size={size} color={color} />;
      }
    } else {
      switch (true) {
        case wid >= 200 && wid <= 232:
          return <Icon name="wi-night-alt-thunderstorm" size={size} color={color} />;
        case wid >= 300 && wid <= 321:
          return <Icon name="wi-rain-mix" size={size} color={color} />;
        case wid >= 500 && wid <= 531:
          return <Icon name="wi-night-alt-rain-mix" size={size} color={color} />;
        case wid >= 600 && wid <= 622:
          return <Icon name="wi-night-alt-snow" size={size} color={color} />;
        case wid == 701:
        case wid == 762:
        case wid == 771:
          return <Icon name="wi-windy" size={size} color={color} />;
        case wid == 711:
          return <Icon name="wi-smoke" size={size} color={color} />;
        case wid == 721:
          return <Icon name="wi-night-alt-haze" size={size} color={color} />;
        case wid == 731:
        case wid == 751:
        case wid == 761:
          return <Icon name="wi-dust" size={size} color={color} />;
        case wid == 741:
          return <Icon name="wi-night-fog" size={size} color={color} />;
        case wid == 781:
          return <Icon name="wi-tornado" size={size} color={color} />;
        case wid == 800:
          return <Icon name="wi-night-clear" size={size} color={color} />;
        case wid == 801:
          return <Icon name="wi-night-alt-cloudy" size={size} color={color} />;
        case wid == 802:
          return <Icon name="wi-cloud" size={size} color={color} />;
        case wid == 803 || wid == 804:
          return <Icon name="wi-cloudy" size={size} color={color} />;
        default:
          return <Icon name="alien" size={size} color={color} />;
      }
    }
  }
}
