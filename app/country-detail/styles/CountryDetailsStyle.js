import { StyleSheet } from "react-native";

const countryDetailsStyle = StyleSheet.create({
    container: { padding: 16, },
    large: { fontSize: 20 },
    bold: { fontWeight: '800' },
    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16
    }
});

export default countryDetailsStyle;
