import { memo } from "react";
import errorStyle from "../styles/ErrorStyle";

const ErrorComponent = ({ error }) => {
    return <Text style={errorStyle.errorText} >{`${error}`}</Text>;
};

export default memo(ErrorComponent);
