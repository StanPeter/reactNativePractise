import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../global/colors";
import Card from "./Card";

interface Props {
    selectedNum: number;
}

const SelectedContainer: React.FC<Props> = ({ selectedNum }) => {
    return (
        <Card style={styles.selectedContainer}>
            <Text style={styles.selectedText}>Chosen Number</Text>
            <Text style={styles.selectedNum}>{selectedNum}</Text>
        </Card>
    );
};

export default SelectedContainer;

const styles = StyleSheet.create({
    selectedContainer: {
        // shadowColor: COLORS.primary,
        //for android
        elevation: 2,
        // for IOS
        shadowColor: COLORS.primary,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.6,

        width: "60%",
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    selectedText: {
        letterSpacing: 0.8,
    },
    selectedNum: {
        fontSize: 32,
        marginVertical: 12,
        color: COLORS.accent,
        // borderWidth: 1,
        // borderColor: COLORS.accent,
        // borderRadius: 10,
    },
});
