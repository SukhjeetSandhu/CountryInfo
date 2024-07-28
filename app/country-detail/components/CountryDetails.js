import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorComponent from "../../generic/components/ErrorComponent";
import countryDetailsStyle from "../styles/CountryDetailsStyle";
import { memo } from "react";
import { titleMapping } from "../config/TitleMapping";

const CountryDetails = ({ error, loading, countryDetails }) => {

    const renderCountryDetails = () => {
        return (
            <View style={countryDetailsStyle.container}>
                {
                    titleMapping.map(({ key, title, id }) => {
                        const { [key]: value } = countryDetails || {};
                        return (
                            <View key={`${id}-Detail`} style={countryDetailsStyle.textContainer}>
                                <Text style={[countryDetailsStyle.large, countryDetailsStyle.bold]}>{title}: </Text>
                                <Text testID={value} style={countryDetailsStyle.large}>{value}</Text>
                            </View>
                        )
                    })
                }
            </View >
        );
    }

    return (
        <SafeAreaView>
            {loading && <ActivityIndicator size="large" />}
            {error && <ErrorComponent error={error} />}
            {!loading && !error && renderCountryDetails()}
        </SafeAreaView>
    );
};

export default memo(CountryDetails);
