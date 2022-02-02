import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../global/colors";

interface Props {
    // setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Header: React.FC<Props> = ({}) => {
    return (
        <View style={styles.header}>
            {/* <Text style={styles.headerTitle}>{""}</Text> */}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop: 36,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        color: "black",
        fontSize: 18,
    },
});
