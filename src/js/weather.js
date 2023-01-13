import ELEMENT from './ui';
import BasicWeather from './conversion';

class Weather extends BasicWeather {
  updateWeatherData() {
    this.updateCity();
    this.updateTemperature();
    this.updateFeelsLike();
    this.updateState();
    this.updateSunrise();
    this.updateSunset();
    this.updateIcon();
  }

  updateCity() {
    ELEMENT.ACTIVE_CITY_LIST.forEach((element) => {
      element.textContent = this.city;
    });
  }

  updateTemperature() {
    ELEMENT.TEMPERATURE.forEach((element) => {
      element.textContent = this.temperature;
    });
  }

  updateFeelsLike() {
    ELEMENT.FEELS_LIKE.textContent = this.feelsLike;
  }

  updateState() {
    ELEMENT.CURRENT_STATE.textContent = this.state;
  }

  updateSunrise() {
    ELEMENT.SUNRISE.textContent = this.sunrise;
  }

  updateSunset() {
    ELEMENT.SUNSET.textContent = this.sunset;
  }

  updateIcon() {
    ELEMENT.ICON_USE.setAttributeNS(null, 'href', this.icon);
  }
}

export default Weather;
