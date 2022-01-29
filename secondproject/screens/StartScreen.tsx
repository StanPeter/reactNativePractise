import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
    return (
        <View style={styles.container}>
            <Text>Heello</Text>
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
});
