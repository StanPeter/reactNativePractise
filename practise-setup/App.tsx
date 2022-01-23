import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoControlBar from "./components/ToDoControlBar";
import ToDoItems from "./components/ToDoItems";

export default function App() {
    const [items, setItems] = useState([
        { title: "First item", id: 794 },
        { title: "Second item", id: 751 },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <ToDoControlBar setItems={setItems} />
            <ToDoItems items={items} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde3eb",
        marginTop: 30,
    },
});
