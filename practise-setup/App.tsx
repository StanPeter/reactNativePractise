import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up a.tsx to start working on your app!</Text>
            <View style={styles.customBtn}>
                <Button
                    // style={styles.customBtn}

                    onPress={() => console.log("pressed")}
                    title="Click me"
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    customBtn: {
        paddingVertical: 15,
    },
});
