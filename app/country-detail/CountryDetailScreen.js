
import AsyncStorage from '@react-native-async-storage/async-storage';
import { memo, useEffect, useState } from 'react';
import { fetchCountryDetails } from './config/ApiRequests';
import CountryDetails from './components/CountryDetails';

const CountryDetailScreen = ({ navigation }) => {

    const [countryDetails, setCountryDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const onCountryDetailsFetch = (apiError, data) => {
        if (apiError) setError(apiError)
        else setCountryDetails(data)
        setLoading(false);
    }

    useEffect(() => {
        const getSelectedAlpha2Value = async () => {
            const country = await AsyncStorage.getItem('selectedCountry');
            const { cca2, name: { common } = {} } = JSON.parse(country);
            navigation.setOptions({ title: common });
            fetchCountryDetails(cca2, onCountryDetailsFetch);
        }
        getSelectedAlpha2Value();
    }, []);

    return (
        <CountryDetails
            error={error}
            loading={loading}
            countryDetails={countryDetails}
        />);
};

export default memo(CountryDetailScreen);
