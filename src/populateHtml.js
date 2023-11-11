const locationCountry = document.querySelector('.locationCountry');
const locationName = document.querySelector('.locationName');
const currentTemp = document.querySelector('.currentTemp');
const tempL = document.querySelector('.tempL');
const tempH = document.querySelector('.tempH');
const currentCondition = document.querySelector('.currentCondition');
const weatherIcon = document.querySelector('.weatherIcon');

export const populateWeatherData = (data) => {
    console.log(data);
    getHourlyUpdate(data);
    locationCountry.textContent = `${data.location.country}`;
    locationName.textContent = `${data.location.name}`;
    currentTemp.textContent = `${data.current.temp_c}\u00B0`;
    currentCondition.textContent = `${data.current.condition.text}`;
    weatherIcon.setAttribute('src', data.current.condition.icon);
    tempL.textContent = `L: ${data.forecast.forecastday[0].day.mintemp_c}`;
    tempH.textContent = `H: ${data.forecast.forecastday[0].day.maxtemp_c}`;
};

const getHourlyUpdate = (data) => {
    let currentHour = new Date().getHours();
    let section = document.querySelector(`.hourlyForecast`);
    let hourly = document.querySelector('.hourly');
    let day = 0;

    do {
        let averageWeather =
            data.forecast.forecastday[day].hour[currentHour].temp_c;

        const hourElement = hourly.cloneNode();
        hourElement.textContent = `${currentHour} ${averageWeather}`;
        section.append(hourElement);
        console.log(currentHour);

        currentHour += 1;
        if (currentHour > 23) {
            currentHour = 0;
            day += 1;
        }
    } while (section.childElementCount < 12);
};
