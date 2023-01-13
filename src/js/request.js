import { CustomError, ERROR } from './errors';
import { render } from './render';
import Forecast from './forecast';
import Weather from './weather';

const API = {
  URL: 'https://api.openweathermap.org/data/2.5/',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
  WEATHER: 'weather',
  FORECAST: 'forecast',
};

const getData = async (city, target) => {
  const response = await fetch(`${API.URL}${target}?q=${city}&appid=${API.KEY}`);
  if (city === ERROR.EMPTY_LINE) throw new CustomError(ERROR.EMPTY_VALUE);
  if (!response.ok) throw new CustomError(ERROR.INCORRECT_CITY);
  const data = await response.json();
  return data;
};

const getForecast = async (city) => {
  try {
    const data = await getData(city, API.FORECAST);
    data.list.forEach((element) => {
      const forecast = (new Forecast(element));
      return forecast.display();
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getWeather = async (city, favorites) => {
  try {
    const data = await getData(city, API.WEATHER);
    const weather = new Weather(data);
    return render(weather, favorites, getForecast);
  } catch (error) {
    return error instanceof TypeError
      ? console.log(ERROR.NOT_RESPONDING)
      : console.log(error.message);
  }
};

export default getWeather;
