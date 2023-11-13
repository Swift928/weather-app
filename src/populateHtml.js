import getHourlyUpdate from './hourlyForecast';
import getDailyForecast from './dailyForecast';

const locationCountry = document.querySelector('.locationCountry');
const locationName = document.querySelector('.locationName');
const currentTemp = document.querySelector('.currentTemp');
const tempL = document.querySelector('.tempL');
const tempH = document.querySelector('.tempH');
const currentCondition = document.querySelector('.currentCondition');
const weatherIcon = document.querySelector('.weatherIcon');

export default function populateWeatherData(data) {
    console.log(data);
    getHourlyUpdate(data);
    getDailyForecast(data);
    locationCountry.textContent = `${data.location.country}`;
    locationName.textContent = `${data.location.name}`;
    currentTemp.textContent = `${data.current.temp_c}\u00B0`;
    currentCondition.textContent = `${data.current.condition.text}`;
    weatherIcon.setAttribute('src', data.current.condition.icon);
    tempL.textContent = `L: ${data.forecast.forecastday[0].day.mintemp_c}`;
    tempH.textContent = `H: ${data.forecast.forecastday[0].day.maxtemp_c}`;
}
