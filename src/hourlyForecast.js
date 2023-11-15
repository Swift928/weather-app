const getHourlyUpdate = (data) => {
    const section = document.querySelector('.hourlyForecast');
    const hourly = document.querySelector('.hourly');

    const [, b] = data.location.localtime.split(' ');
    const [c] = b.split(':');
    let currentHour = Number(c);
    let day = 0;

    while (section.lastChild !== hourly) {
        section.removeChild(section.lastChild);
    }

    for (let i = 0; i < 12; i += 1) {
        const averageWeather =
            data.forecast.forecastday[day].hour[currentHour].temp_c;

        const forecastedWeatherIcon =
            data.forecast.forecastday[day].hour[currentHour].condition.icon;

        const hourElement = hourly.cloneNode();

        hourElement.innerHTML = `
                <p>${i === 0 ? 'Now' : currentHour}</p>
                <img src='${forecastedWeatherIcon}' />
                <p>${averageWeather}\u00B0</p>
            `;

        section.append(hourElement);
        currentHour = (currentHour + 1) % 24;
        day += Math.floor(currentHour / 24);
    }

    section.removeChild(hourly);
};

export default getHourlyUpdate;
