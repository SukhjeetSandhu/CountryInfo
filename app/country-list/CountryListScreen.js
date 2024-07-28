import { useEffect, useState, memo } from "react";
import { fetchCountries } from "./config/ApiRequests";
import CountryList from "./components/CountryList";
import CountriesContext from "./contexts/CountriesContext";

const CountryListScreen = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const onCountriesFetch = (apiError, data) => {
        if (apiError) setError(apiError)
        else setCountries(data)
        setLoading(false);
    };

    useEffect(() => {
        fetchCountries(onCountriesFetch);
    }, []);

    return (
        <CountriesContext.Provider value={{ countries, loading, error }}>
            <CountryList navigation={navigation} />
        </CountriesContext.Provider>
    );
}

export default memo(CountryListScreen);
