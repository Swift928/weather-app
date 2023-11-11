const locationCountry = document.querySelector('.locationCountry');
const locationName = document.querySelector('.locationName');
const currentTemp = document.querySelector('.currentTemp');
const tempL = document.querySelector('.tempL');
const tempH = document.querySelector('.tempH');

export const populateWeatherData = (data) => {
    console.log(data);
    locationCountry.textContent = `${data.location.country}`;
    locationName.textContent = `${data.location.name}`;
    currentTemp.textContent = `${data.current.temp_c}\u00B0`;
    tempL.textContent = `L: ${data.forecast.forecastday[0].day.mintemp_c}`;
    tempH.textContent = `H: ${data.forecast.forecastday[0].day.maxtemp_c}`;
};
