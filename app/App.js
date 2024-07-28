import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryListScreen from './country-list/CountryListScreen';
import CountryDetailScreen from './country-detail/CountryDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Countries" component={CountryListScreen} />
                <Stack.Screen name="Details" component={CountryDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
