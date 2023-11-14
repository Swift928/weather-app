import handleApiCall from './apiHandle';

const locationInput = document.querySelector('.locationInput');
const eraseSvg = document.querySelector('.eraseSvg');
const searchSvg = document.querySelector('.searchSvg');

const searchbar = () => {
    locationInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            if (!locationInput.value.length) {
                locationInput.setCustomValidity('Please enter a location');
            } else {
                handleApiCall(locationInput.value);
                locationInput.value = '';
                eraseSvg.style.display = 'none';
                event.preventDefault();
            }
        }
    });

    locationInput.addEventListener('input', () => {
        eraseSvg.style.display = locationInput.value.length ? 'block' : 'none';
        locationInput.setCustomValidity('');
    });

    eraseSvg.addEventListener('click', () => {
        locationInput.value = '';
        eraseSvg.style.display = 'none';
    });

    searchSvg.addEventListener('click', () => {
        // Set custom validity
        if (!locationInput.value.length) {
            locationInput.setCustomValidity('Please enter a location');
            locationInput.form.reportValidity();
        } else {
            locationInput.setCustomValidity('');
        }

        // Your other logic for handling a valid input
        handleApiCall(locationInput.value);
        locationInput.value = '';
        eraseSvg.style.display = 'none';
    });
};

export default searchbar;
