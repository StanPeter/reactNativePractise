import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";

export default function App() {
    const [items, setItems] = useState([
        { title: "First item", id: 794 },
        { title: "Second item", id: 751 },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Guess a Number"} />
            <StartScreen />
            <Text>Not dossne</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde3eb",
        // marginTop: 30,
    },
});
