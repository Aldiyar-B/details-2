import { format, fromUnixTime } from 'date-fns';
import { CustomError, ERROR } from './errors';
import ELEMENT from './ui';

const CONVERSION = {
  DEGREE_SYMBOL: String.fromCharCode(0xb0),
  THOUSAND_MICROSECONDS: 1000,
  ABSOLUTE_ZERO: -273.15,
  HOUR_MINUTE: 'HH:mm',
  DAY_MONTH: 'dd MMMM',
  TIME: 'time',
  DATE: 'date',

  getIcon(state) {
    const mist = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
    const rain = ['Rain', 'Drizzle'];
    if (mist.includes(state)) return this.getSrc(mist[0]);
    if (rain.includes(state)) return this.getSrc(rain[0]);
    return this.getSrc(state);
  },

  getSrc(state) {
    const sprite = ELEMENT.SPRITE.data;
    return `${sprite}#${state.toLowerCase()}`;
  },

  convertKelvinToCelsius(temperature) {
    if (Number.isNaN(temperature)) throw new CustomError(ERROR.NaN);
    return (temperature + this.ABSOLUTE_ZERO).toFixed(0);
  },

  convertTimestamp(timestamp, option) {
    if (Number.isNaN(timestamp)) throw new CustomError(ERROR.NaN);
    return option === this.TIME
      ? format(fromUnixTime(timestamp), this.HOUR_MINUTE)
      : format(fromUnixTime(timestamp), this.DAY_MONTH);
  },
};

class BasicWeather {
  constructor({
    name, main, weather, dt, sys,
  }) {
    if (name) this.city = name;
    this.temperature = `${CONVERSION.convertKelvinToCelsius(main?.temp)}${CONVERSION.DEGREE_SYMBOL}`;
    this.feelsLike = `${CONVERSION.convertKelvinToCelsius(main?.feels_like)}${CONVERSION.DEGREE_SYMBOL}`;
    this.state = weather[0]?.main;
    this.icon = CONVERSION.getIcon(weather[0]?.main);
    this.date = CONVERSION.convertTimestamp(dt, CONVERSION.DATE);
    this.time = CONVERSION.convertTimestamp(dt, CONVERSION.TIME);
    if (sys.sunrise) this.sunrise = CONVERSION.convertTimestamp(sys?.sunrise, CONVERSION.TIME);
    if (sys.sunset) this.sunset = CONVERSION.convertTimestamp(sys?.sunset, CONVERSION.TIME);
  }
}

export default BasicWeather;
