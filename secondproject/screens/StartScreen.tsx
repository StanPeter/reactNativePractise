import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import { COLORS } from "../global/colors";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [selectedNum, setSelectedNumber] = useState(-1);

    const enteredValueHandler = (val: String) => {
        setEnteredValue(val.replace(/[^0-9]/g, ""));
    };

    const resetBtnHandler = () => {
        setEnteredValue("");
    };

    const confirmBtnHandler = () => {
        const convertedNum = parseInt(enteredValue);

        if (isNaN(convertedNum)) {
            Alert.alert(
                "Input is not valid!",
                "Your input doesn't seem to be a valid number between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetBtnHandler,
                    },
                ]
            );
            return;
        }

        setIsConfirmed(true);
        setSelectedNumber(convertedNum); //parse int from the input, Number() woudn't work well
        setEnteredValue("");
    };

    return (
        <TouchableWithoutFeedback
            //dismiss the keyboard on click somewhere else
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.inputText}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={enteredValueHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            onPress={resetBtnHandler}
                            style={{ ...styles.btn, ...styles.resetBtn }}
                        >
                            <Text style={{ color: "#fff" }}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={confirmBtnHandler}
                            style={{ ...styles.btn, ...styles.confirmBtn }}
                        >
                            <Text style={{ color: "#fff" }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {isConfirmed ? <View style={styles.separator}></View> : null}
                {isConfirmed ? (
                    <Card style={styles.selectedContainer}>
                        <Text style={styles.selectedText}>Chosen Number</Text>
                        <Text style={styles.selectedNum}>{selectedNum}</Text>
                        <TouchableOpacity
                            style={{ ...styles.btn, ...styles.selectedBtn }}
                        >
                            <Text style={{ fontSize: 16, color: "#fff" }}>
                                Start game!
                            </Text>
                        </TouchableOpacity>
                    </Card>
                ) : null}
            </View>
        </TouchableWithoutFeedback>
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
    inputText: {
        width: 50,
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
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    confirmBtn: {
        backgroundColor: COLORS.primary,
    },
    resetBtn: {
        backgroundColor: COLORS.accent,
    },
    selectedContainer: {
        shadowColor: COLORS.primary,
        // marginTop: "20%",
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
    separator: {
        width: 1,
        height: 80,
        marginVertical: 10,
        backgroundColor: "grey",
    },
});

// /**
//  * @param {String} number Number to be multiplied
//  */
// function bar(number: number) {
//     return number * number;
// }
