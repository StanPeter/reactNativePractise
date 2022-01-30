import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
    style?: Object;
}

const Card: React.FC<Props> = ({ children, style }) => {
    return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        //for android
        elevation: 5,
        // for IOS
        shadowColor: "#000",
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.6,
    },
});
