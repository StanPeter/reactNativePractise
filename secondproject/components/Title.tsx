import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";

interface Props {
    title: string;
}

const Title: React.FC<Props> = ({ title }) => {
    let [fontsLoaded] = useFonts({
        Quintessential: require("../assets/fonts/Quintessential-Regular.ttf"),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 30,
        letterSpacing: 1,
        fontFamily: "Quintessential",
        marginVertical: "10%",
    },
});
