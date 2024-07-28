import { memo, useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CountriesContext from "../contexts/CountriesContext";
import countryListStyle from "../styles/CountryListStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorComponent from "../../generic/components/ErrorComponent";

const CountryList = ({ navigation }) => {
    const { loading, error, countries } = useContext(CountriesContext);
    const [selectedAlpha2Code, setSelectedAlpha2Code] = useState('');

    useEffect(() => {
        const getSelectedAlpha2Value = async () => {
            const country = await AsyncStorage.getItem('selectedCountry');
            if (country) {
                const { cca2 } = JSON.parse(country);
                setSelectedAlpha2Code(cca2)
            }
        }
        getSelectedAlpha2Value();
    }, []);

    const onCountrySelect = async (country) => {
        await AsyncStorage.setItem('selectedCountry', JSON.stringify(country));
        setSelectedAlpha2Code(country.cca2);
        navigation.navigate('Details');
    };

    const renderCountry = ({ item }) => {
        const { name: { official: officialName } = {}, cca2: alpha2Code } = item || {};
        return (
            <TouchableOpacity
                testID={alpha2Code}
                onPress={() => onCountrySelect(item)}
            >
                <View
                    style={[countryListStyle.listItem, selectedAlpha2Code == alpha2Code ? countryListStyle.selected : null]}
                >
                    <Text>{officialName}</Text>
                    <Text style={countryListStyle.alphaCodeText}>{alpha2Code}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    const keyExtractor = (country) => country.cca2;

    return (
        <SafeAreaView>
            {loading && <ActivityIndicator size="large" />}
            {error && <ErrorComponent error={error} />}
            {
                !loading && !error && (
                    <FlatList
                        data={countries}
                        keyExtractor={keyExtractor}
                        renderItem={renderCountry}
                    />
                )
            }
        </SafeAreaView>
    );
};

export default memo(CountryList);
