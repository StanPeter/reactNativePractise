import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppWrapper from "../components/AppWrapper";
import Card from "../components/Card";
import CustomBtn from "../components/CustomBtn";
import SelectedContainer from "../components/SelectedContainer";
import Title from "../components/Title";
import { COLORS } from "../global/colors";

interface Props {
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<any>;
    selectedNum: number;
}

/**
 * @param min Min number that should be output
 * @param max Max number that should be output
 * @param excludedNumbers Array of numbers that will be excluded if output
 */
const generateRandomNum = (
    min: number,
    max: number,
    excludedNumbers?: number[]
): number => {
    let randomNumber: number = Math.floor(Math.random() * max);

    if (randomNumber < min) randomNumber + min;
    if (randomNumber > max) console.log("Something wrong with the LOGIC");

    if (excludedNumbers?.includes(randomNumber))
        return generateRandomNum(min, max, excludedNumbers);

    return randomNumber;
};

const GameScreen: React.FC<Props> = ({ navigation, route }) => {
    const [currentGuess, setCurrentGuess] = useState(route.params?.selectedNum);

    return (
        <AppWrapper>
            <View style={styles.container}>
                <Title title="Opponent's Guess" />
                <Card>
                    <SelectedContainer selectedNum={currentGuess} />
                    <View style={styles.btnContainer}>
                        <CustomBtn
                            titleStyle={styles.controlButtonText}
                            style={styles.controlButton}
                            title={"LOWER"}
                        />
                        <CustomBtn
                            titleStyle={styles.controlButtonText}
                            style={styles.controlButton}
                            title={"GREATER"}
                        />
                    </View>
                </Card>
                <CustomBtn
                    title={"Go back"}
                    style={{ marginTop: 50 }}
                    onPressHandler={() => {
                        navigation.navigate("StartScreen");
                    }}
                />
            </View>
        </AppWrapper>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50,
        width: 350,
        maxWidth: "80%",
    },
    controlButton: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.accent,
    },
    controlButtonText: {
        color: COLORS.accent,
        fontSize: 18,
    },
});
