import { BASE_API_URL } from '@env';

const fetchCountries = async (callback) => {
    try {
        const response = await fetch(`${BASE_API_URL}/all?fields=cca2,name`);
        const data = await response.json();
        callback(null, data.slice(0, 20)); // Showing 20 countries only.
    } catch (error) {
        callback(error.message);
    }
};

export { fetchCountries };
