import { StyleSheet } from "react-native";

const countryListStyle = StyleSheet.create({
    listItem: {
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        justifyContent: 'space-between',
    },
    alphaCodeText: { marginTop: 8 },
    selected: { backgroundColor: 'grey' },
});

export default countryListStyle;
