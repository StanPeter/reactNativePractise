import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Button,
    SafeAreaView,
    SafeAreaViewBase,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const items: String[] = [];

export default function App() {
    const [name, setName] = useState("");

    const addingHandler = () => {
        items.push(name);
        setName("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={(d) => setName(d)}
                />
                <TouchableOpacity
                    style={styles.customBtn}
                    onPress={addingHandler}
                >
                    <Text style={{ color: "#fff" }}>Add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listOfItems}>
                {items.length > 0 ? (
                    items.map((item, i) => (
                        <Text style={styles.listItem} key={i}>
                            {item}
                        </Text>
                    ))
                ) : (
                    <Text style={styles.listItem}>
                        Unfortunately, no items added
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde3eb",
        marginTop: 30,
    },
    customBtn: {
        width: 60,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#4080c9",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        paddingLeft: 10,
        width: 200,
        height: 40,
        flex: 1,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 10,
        borderColor: "#4080c9",
        backgroundColor: "#fff",
    },
    header: {
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 10,
    },
    listOfItems: {
        margin: 20,
    },
    listItem: {
        fontSize: 16,
        fontWeight: '800',
    },
});
