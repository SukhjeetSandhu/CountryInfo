const fetchCountryDetails = async (alpha2Code, callback) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${alpha2Code}?fields=cca2,name,cca3,currencies`);
        const data = await response.json();
        const updatedData = { ...data };

        // Simplifying the data that needs to be shown in Details screen.
        Object.keys(data).forEach(key => {
            if (key == 'name') updatedData.officialName = data.name.official
            else if (key == 'currencies') {
                const { [key]: currencies = {} } = data;
                let currencyValue = '';
                Object.values(currencies).forEach(({ name }, index) => {
                    if (index) currencyValue += ', '
                    currencyValue += `${name}`
                })
                updatedData[key] = currencyValue;
            }
        })

        callback(null, updatedData);
    } catch (error) {
        callback(error.message);
    }
};

export { fetchCountryDetails };
