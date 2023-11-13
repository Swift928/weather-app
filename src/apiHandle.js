import populateWeatherData from './populateHtml';

const getWeatherData = async (location) => {
    const defaultUrl = `https://api.weatherapi.com/v1/forecast.json?key=5788f077bebc40d3b6200451230711&q=${location}&days=20`;

    try {
        const response = await fetch(defaultUrl, { mode: 'cors' });
        const response1 = await response.json();

        return response1;
    } catch (err) {
        console.log(err);
    }
    return null;
};

const handleApiCall = async (enteredLocation = 'london') => {
    try {
        const data = await getWeatherData(enteredLocation);
        populateWeatherData(data);
    } catch (err) {
        console.log(err);
    }
};

export default handleApiCall;
