import populateWeatherData from './populateHtml';

const errorMessage = document.querySelector('.errorMessage');

const getWeatherData = async (location) => {
    const defaultUrl = `https://api.weatherapi.com/v1/forecast.json?key=5788f077bebc40d3b6200451230711&q=${location}&days=20`;

    if (!location) {
        return;
    }

    try {
        const response = await fetch(defaultUrl, { mode: 'cors' });
        if (response.status === 400) {
            errorMessage.innerHTML = 'Invalid location';
            setTimeout(() => {
                errorMessage.innerHTML = '';
            }, 1000);

            throw new Error('Invalid location');
        }
        const response1 = await response.json();

        return response1;
    } catch (err) {
        console.log(err);
    }
    return null;
};

const handleApiCall = async (enteredLocation = 'london') => {
    const loaderElement = document.querySelector('.loaderElement');

    try {
        loaderElement.classList.remove('hidden');
        const data = await getWeatherData(enteredLocation);
        populateWeatherData(data);
        loaderElement.classList.add('hidden');
    } catch (err) {
        console.log(err);
        loaderElement.classList.add('hidden');
    }
};

export default handleApiCall;
