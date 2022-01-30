import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps,
} from "react-native";
import React from "react";

const Input: React.FC<TextInputProps> = (props) => {
    return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: "center",
        fontSize: 20,
    },
});
