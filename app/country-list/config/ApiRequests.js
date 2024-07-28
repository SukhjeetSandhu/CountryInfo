const fetchCountries = async (callback) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=cca2,name`);
        const data = await response.json();
        callback(null, data.slice(0, 20)); // Showing 20 countries only.
    } catch (error) {
        callback(error.message);
    }
};

export { fetchCountries };
