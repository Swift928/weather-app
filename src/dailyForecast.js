import { format, parseISO } from 'date-fns';

const getDailyForecast = (data) => {
    const section = document.querySelector('.dailyForecast');
    const daily = document.querySelector('.daily');
    const dailyForecastCount = document.querySelector('.dailyForecastCount');

    const blade = data.forecast.forecastday;

    for (let x = 0; x < blade.length; x += 1) {
        const dailyElement = daily.cloneNode();

        const parsedDate = parseISO(data.forecast.forecastday[x].date);
        const date = format(parsedDate, 'EEE');

        dailyElement.innerHTML = `
    <p>${date}</p>
    <p>H: ${data.forecast.forecastday[x].day.maxtemp_c}</p>
    <img src='${data.forecast.forecastday[x].day.condition.icon}' />
    <p>L: ${data.forecast.forecastday[x].day.mintemp_c}</p>
    `;

        section.append(dailyElement);
    }
    dailyForecastCount.innerHTML = `${blade.length}-Day Forecast`;
    section.removeChild(daily);
};

export default getDailyForecast;
