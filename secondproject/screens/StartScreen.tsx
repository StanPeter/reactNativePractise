import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Card from "../components/Card";
import { COLORS } from "../global/colors";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={{ ...styles.btn, ...styles.resetBtn }}
                    >
                        <Text style={{ color: "#fff" }}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.btn, ...styles.confirmBtn }}
                    >
                        <Text style={{ color: "#fff" }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    confirmBtn: {
        backgroundColor: COLORS.primary,
    },
    resetBtn: {
        backgroundColor: COLORS.accent,
    },
});

// /**
//  * @param {String} number Number to be multiplied
//  */
// function bar(number: number) {
//     return number * number;
// }
