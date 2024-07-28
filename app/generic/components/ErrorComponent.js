import { memo } from "react";
import errorStyle from "../styles/ErrorStyle";
import { Text } from "react-native";

const ErrorComponent = ({ error }) => {
    return <Text style={errorStyle.errorText} >{`${error}`}</Text>;
};

export default memo(ErrorComponent);
