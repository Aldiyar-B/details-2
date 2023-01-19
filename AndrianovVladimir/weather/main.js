import { format } from 'date-fns'
import { storage } from './storage.js'
import { getTime, getDates } from './date.js'

const form = document.querySelector('.form');
const nowCityName = document.querySelector('.now__cityName');
const nowTemp = document.querySelector('.now__temp');
const nowIcon = document.querySelector('.now__icon');
const favoritIcon = document.querySelector('.heart');
const cityList = document.querySelector('.city__list');
const detailsTemp = document.querySelector('.details__temp');
const detailsFeelsLike = document.querySelector('.details__feelsLike');
const detailsWeather = document.querySelector('.details__weather');
const detailsCity = document.querySelector('.details__city');
const detailsSunrise = document.querySelector('.details__sunrise');
const detailsSunset = document.querySelector('.details__sunset');
const forecastBlock = document.querySelector('.forecast__block');
const forecastCityName = document.querySelector('.forecast__city');
const dateTime = document.querySelector('.dateTime');



favoritIcon.addEventListener('click',addCityList);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.search__input').value; 
    if(inputValue !== '') {
        getCity(inputValue)
    }
});

 async function getCity(cityName) {

    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const serverUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast'
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}&units=metric`
    
    try{
        let respons = await fetch(url);
        let responsForecast = await fetch(urlForecast);
        let data = await respons.json();
        let dataForecast = await responsForecast.json();
        console.log(data)
        console.log(dataForecast)
        getData(data);
        getDataForecast(dataForecast);
    }catch{
        // alert(` ${error}`)
    }
};

function getData ({
    name : cityName, 
    main : { feels_like, temp }, 
    weather : [ { description, icon } ], 
    sys : { sunrise, sunset }, 
    timezone, 
}) {
    
    nowCityName.textContent =  cityName;
    nowTemp.textContent = Math.round(temp)+` C°`;
    nowIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    dateTime.textContent = format(new Date(), 'dd-MM-yyyy HH:mm');

    detailsCity.textContent = cityName;
    detailsTemp.textContent = Math.round(temp)+` C°`;
    detailsFeelsLike.textContent = Math.round(feels_like)+` C°` ;
    detailsWeather.textContent = description;
    detailsSunrise.textContent = getTime(sunrise, timezone);
    detailsSunset.textContent  = getTime(sunset, timezone);

    forecastCityName.textContent = cityName;

    storage.currentCity = cityName;
    storage.saveCurrentCity(storage.currentCity);
};

function getDataForecast({list}) {
    list.innerHTML = '';

    list.forEach((item) => {
        let forecastElem = document.createElement('div');
        forecastElem.className = 'forecast__elem';

        let forecastDateElem = document.createElement('div');
        forecastDateElem.className = 'forecast__dateElem';

        let forecastDate = document.createElement('div');
        forecastDate.className = 'forecast__date';
        forecastDate.textContent = getDates(item.dt);
        
        let forecastTime = document.createElement('div');
        forecastTime.className = 'forecast__time';
        forecastTime.textContent = getTime(item.dt, 0);
        
        forecastDateElem.append(forecastDate, forecastTime);

        let forecastWeather = document.createElement('div');
        forecastWeather.className = 'forecast__weather';

        let forecastTemp = document.createElement('div');
        forecastTemp.className = 'forecast__temp';
        forecastTemp.textContent = `Temperature: `+ Math.round(item.main.temp) + ` C°`;

        let forecastFeels = document.createElement('div');
        forecastFeels.className = 'forecast__feels';
        forecastFeels.textContent =  `Feels like: ` + Math.round(item.main.feels_like) + ` C°`;

        let forecastDescription = document.createElement('div');
        forecastDescription.className = 'forecast__description';
        forecastDescription.textContent = item.weather[0].main;

        let forecastImg = document.createElement('img');
        forecastImg.className = 'forecast__img';
        forecastImg.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

        forecastWeather.append(forecastTemp, forecastFeels, forecastDescription, forecastImg);
        forecastElem.append(forecastDateElem, forecastWeather);
        forecastBlock.append(forecastElem);
    })
};

function addCityList() {
    const city = nowCityName.textContent;

    if (storage.favorList.has(city)) {
        storage.favorList.delete(city)
      } else {
        storage.favorList.add(city)
      }
      storage.saveFavoriteCities(storage.favorList)
      
    render();
};

function render() {
    storage.getFavoriteCities();
    if (storage.favorList === null) {
        storage.favorList = new Set();
    }
    cityList.innerHTML = "";

    storage.favorList.forEach((item) => {
        createFavoriteItem(item);
        
    })
}

function createFavoriteItem(item) {

        let cityItem = document.createElement('div');
        cityItem.className = 'city__item';

        let city = document.createElement('div');
        city.className = 'city';
        city.textContent = item;
   
        let buttonDelete = document.createElement('div');
        buttonDelete.className = 'btn__delete';
        if(city.textContent !== "") {
            buttonDelete.textContent = '+';
        }
        cityList.prepend(cityItem);
        cityItem.prepend(city);
        cityItem.append(buttonDelete);
       
        city.addEventListener("click", () => {
                getCity(item)
        });
    
        buttonDelete.addEventListener("click", function () {
           
            cityItem.remove();  
        });
};

storage.getCurrentCity();
storage.getFavoriteCities();
getCity(storage.currentCity);
render();

