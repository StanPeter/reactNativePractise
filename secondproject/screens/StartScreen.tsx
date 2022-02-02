import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
    Alert,
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import AppWrapper from "../components/AppWrapper";
import Card from "../components/Card";
import CustomBtn from "../components/CustomBtn";
import Input from "../components/Input";
import SelectedContainer from "../components/SelectedContainer";
import Title from "../components/Title";
import { COLORS } from "../global/colors";

interface Props {
    navigation: NativeStackNavigationProp<any>;
}

const StartScreen: React.FC<Props> = ({ navigation }) => {
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
        <AppWrapper>
            <TouchableWithoutFeedback
                //dismiss the keyboard on click somewhere else
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={styles.container}>
                    <Title title="Start a new Game" />
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
                            <CustomBtn
                                style={styles.resetBtn}
                                onPressHandler={resetBtnHandler}
                                title={"Reset"}
                            />
                            <CustomBtn
                                onPressHandler={confirmBtnHandler}
                                title={"Confirm"}
                            />
                        </View>
                    </Card>
                    {isConfirmed
                        ? [
                              <View key={0} style={styles.separator}></View>,
                              <SelectedContainer
                                  key={1}
                                  selectedNum={selectedNum}
                              />,
                              <CustomBtn
                                  key={2}
                                  title={"Start game!"}
                                  style={styles.selectedBtn}
                                  titleStyle={{ fontSize: 16 }}
                                  onPressHandler={() => {
                                      navigation?.navigate("GameScreen", {
                                          selectedNum: selectedNum,
                                      });

                                      setEnteredValue("");
                                      setSelectedNumber(-1);
                                      setIsConfirmed(false);
                                  }}
                              />,
                          ]
                        : null}
                </View>
            </TouchableWithoutFeedback>
        </AppWrapper>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
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
    resetBtn: {
        backgroundColor: COLORS.accent,
    },
    separator: {
        width: 1,
        height: 80,
        marginVertical: 10,
        backgroundColor: "grey",
    },
    selectedBtn: {
        marginTop: 25,
        backgroundColor: COLORS.primary,
    },
});

// /**
//  * @param {String} number Number to be multiplied
//  */
// function bar(number: number) {
//     return number * number;
// }
