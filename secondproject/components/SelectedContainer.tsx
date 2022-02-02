import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../global/colors";
import Card from "./Card";
import CustomBtn from "./CustomBtn";

interface Props {
    selectedNum: number;
    navigation?: NativeStackNavigationProp<any>;
}

const SelectedContainer: React.FC<Props> = ({ selectedNum, navigation }) => {
    return (
        <Card style={styles.selectedContainer}>
            <Text style={styles.selectedText}>Chosen Number</Text>
            <Text style={styles.selectedNum}>{selectedNum}</Text>
            <CustomBtn
                title={"Start game!"}
                style={styles.selectedBtn}
                titleStyle={{ fontSize: 16 }}
                onPressHandler={() => navigation?.navigate("GameScreen")}
            />
        </Card>
    );
};

export default SelectedContainer;

const styles = StyleSheet.create({
    selectedContainer: {
        shadowColor: COLORS.primary,
        width: "60%",
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    selectedText: {},
    selectedNum: {
        fontSize: 28,
        fontWeight: "600",
        padding: 10,
        color: COLORS.primary,
    },
    selectedBtn: {
        marginTop: 15,
        backgroundColor: COLORS.primary,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});
