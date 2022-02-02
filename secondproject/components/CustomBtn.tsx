import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../global/colors";

interface Props {
    style?: Object;
    titleStyle?: Object;
    title: String;
    onPressHandler?: () => void;
}

const CustomBtn: React.FC<Props> = ({
    style,
    titleStyle,
    title,
    onPressHandler,
}) => {
    return (
        <TouchableOpacity
            onPress={onPressHandler}
            style={{ ...styles.btn, ...style }}
        >
            <Text style={{ ...styles.btnTitle, ...titleStyle }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomBtn;

const styles = StyleSheet.create({
    container: {},
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: COLORS.primary,
    },
    btnTitle: {
        color: "#fff",
    },
});
