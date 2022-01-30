import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Guess a Number"} />
            <StartScreen />
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde3eb",
    },
});
