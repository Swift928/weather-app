const getHourlyUpdate = (data) => {
    const section = document.querySelector('.hourlyForecast');
    const hourly = document.querySelector('.hourly');

    let currentHour = new Date(data.location.localtime).getHours();

    let day = 0;

    console.log(data);
    console.log(data.forecast);
    // forecast.forecastday[0].hour[0].temp_c

    do {
        const averageWeather =
            data.forecast.forecastday[day].hour[currentHour].temp_c;

        const forecastedWeatherIcon =
            data.forecast.forecastday[day].hour[currentHour].condition.icon;

        const hourElement = hourly.cloneNode();
        hourElement.innerHTML = `
            <p>${currentHour}</p>
            <img src='${forecastedWeatherIcon}' />
            <p>${averageWeather}\u00B0</p>
        `;

        section.append(hourElement);
        currentHour = (currentHour + 1) % 24;
        day += Math.floor(currentHour / 24);
    } while (section.childElementCount < 13);

    section.removeChild(hourly);
};

export default getHourlyUpdate;
