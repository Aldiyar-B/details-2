import { createElement } from './utils';
import BasicWeather from './conversion';
import ELEMENT from './ui';

class Forecast extends BasicWeather {
  static class = {
    item: 'forecast-item',
    date: 'forecast-date',
    time: 'forecast-time',
    temperature: 'forecast-temperature',
    feelsLike: 'forecast-feels-like',
    state: 'forecast-state',
    icon: 'icon-item',
  };

  display() {
    const item = Forecast.createItem?.();
    const iconSvg = Forecast.createIconSvg?.();
    ELEMENT.TAB_LIST_FORECAST.append(item);
    item.append(
      this.createDate?.(),
      this.createTime?.(),
      this.createTemperature?.(),
      this.createState?.(),
      this.createFeelsLike?.(),
      iconSvg,
    );
    iconSvg.append(this.createIconUse?.());
  }

  static createItem() {
    return createElement({ tag: 'div', class: Forecast.class.item });
  }

  createDate() {
    return createElement({
      tag: 'span',
      class: Forecast.class.date,
      text: this.date,
    });
  }

  createTime() {
    return createElement({
      tag: 'span',
      class: Forecast.class.time,
      text: this.time,
    });
  }

  createState() {
    return createElement({
      tag: 'span',
      class: Forecast.class.state,
      text: this.state,
    });
  }

  createTemperature() {
    return createElement({
      tag: 'span',
      class: Forecast.class.temperature,
      text: `Temperature: ${this.temperature}`,
    });
  }

  createFeelsLike() {
    return createElement({
      tag: 'span',
      class: Forecast.class.feelsLike,
      text: `Feels like: ${this.feelsLike}`,
    });
  }

  static createIconSvg() {
    const svg = document.createElementNS(Forecast.xmlns, 'svg');
    svg.setAttribute('class', Forecast.class.icon);
    return svg;
  }

  createIconUse() {
    const use = document.createElementNS(Forecast.xmlns, 'use');
    use.setAttribute('class', Forecast.class.icon);
    use.setAttributeNS(null, 'href', this.icon);
    return use;
  }

  static xmlns = 'http://www.w3.org/2000/svg';
}

export default Forecast;
