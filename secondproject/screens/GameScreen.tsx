import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppWrapper from "../components/AppWrapper";
import Card from "../components/Card";
import CustomBtn from "../components/CustomBtn";
import SelectedContainer from "../components/SelectedContainer";

interface Props {
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<any>;
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

const GameScreen: React.FC<Props> = ({ navigation }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNum(1, 100));

    return (
        <AppWrapper>
            <View style={styles.container}>
                <Text>Opponent's Guess</Text>
                <SelectedContainer selectedNum={currentGuess} />
                <Card style={styles.btnContainer}>
                    <CustomBtn title={"LOWER"} />
                    <CustomBtn title={"GREATER"} />
                </Card>
                <CustomBtn
                    title={"Go back"}
                    style={{ marginTop: 30 }}
                    onPressHandler={() => navigation.navigate("StartScreen")}
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
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    },
});
