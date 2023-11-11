import { populateWeatherData } from './populateHtml';

let getWeatherData = async (location) => {
    let defaultUrl = `https://api.weatherapi.com/v1/forecast.json?key=5788f077bebc40d3b6200451230711&q=${location}&days=20`;

    try {
        const response = await fetch(defaultUrl, { mode: 'cors' });
        const response_1 = await response.json();

        return response_1;
    } catch (err) {
        console.log(err);
    }
};

export let handleApiCall = async (enteredLocation = 'london') => {
    try {
        let data = await getWeatherData(enteredLocation);
        populateWeatherData(data);
    } catch (err) {
        console.log(err);
    }
};
