import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../global/colors";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: 80,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
});
