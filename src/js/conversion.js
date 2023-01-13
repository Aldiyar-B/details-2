import { format, fromUnixTime } from 'date-fns';
import { CustomError, ERROR } from './errors';
import ELEMENT from './ui';

const EXTRA_VALUE = {
  DEGREE_SYMBOL: String.fromCharCode(0xb0),
  THOUSAND_MICROSECONDS: 1000,
  ABSOLUTE_ZERO: -273.15,
  HOUR_MINUTE: 'HH:mm',
  DAY_MONTH: 'dd MMMM',
  TIME: 'time',
  DATE: 'date',
};

class BasicWeather {
  constructor({
    name, main, weather, dt, sys,
  }) {
    if (name) this.city = name;
    this.temperature = `${BasicWeather.convertKelvinToCelsius(main?.temp)}${EXTRA_VALUE.DEGREE_SYMBOL}`;
    this.feelsLike = `${BasicWeather.convertKelvinToCelsius(main?.feels_like)}${EXTRA_VALUE.DEGREE_SYMBOL}`;
    this.state = weather[0]?.main;
    this.icon = BasicWeather.getIcon(weather[0]?.main);
    this.date = BasicWeather.convertTimestamp(dt, EXTRA_VALUE.DATE);
    this.time = BasicWeather.convertTimestamp(dt, EXTRA_VALUE.TIME);
    if (sys.sunrise) this.sunrise = BasicWeather.convertTimestamp(sys?.sunrise, EXTRA_VALUE.TIME);
    if (sys.sunset) this.sunset = BasicWeather.convertTimestamp(sys?.sunset, EXTRA_VALUE.TIME);
  }

  static getIcon(state) {
    const mist = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
    const rain = ['Rain', 'Drizzle'];
    if (mist.includes(state)) return BasicWeather.getSrc(mist[0]);
    if (rain.includes(state)) return BasicWeather.getSrc(rain[0]);
    return BasicWeather.getSrc(state);
  }

  static getSrc(state) {
    const sprite = ELEMENT.SPRITE.data;
    return `${sprite}#${state.toLowerCase()}`;
  }

  static convertKelvinToCelsius(temperature) {
    if (Number.isNaN(temperature)) throw new CustomError(ERROR.NaN);
    return (temperature + EXTRA_VALUE.ABSOLUTE_ZERO).toFixed(0);
  }

  static convertTimestamp(timestamp, option) {
    if (Number.isNaN(timestamp)) throw new CustomError(ERROR.NaN);
    return option === EXTRA_VALUE.TIME
      ? format(fromUnixTime(timestamp), EXTRA_VALUE.HOUR_MINUTE)
      : format(fromUnixTime(timestamp), EXTRA_VALUE.DAY_MONTH);
  }
}

export default BasicWeather;
