import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Item } from "../global/interfaces";

interface Props {
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ToDoControlBar: React.FC<Props> = ({ setItems }) => {
    const [name, setName] = useState("");

    const addingHandler = () => {
        setItems((prevValue: Item[]) => [
            ...prevValue,
            {
                title: name,
                id: Math.round(Math.random() * 1000),
            },
        ]);
        // setName("");
    };

    const clearingHandler = () => setName("");

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(d) => setName(d)}
            />
            <TouchableOpacity
                style={{
                    ...styles.customBtn,
                    ...styles.btnAdd,
                }}
                onPress={addingHandler}
            >
                <Text style={{ color: "#fff" }}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.customBtn,
                    ...styles.btnClear,
                }}
                onPress={clearingHandler}
            >
                <Text style={{ color: "#fff" }}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ToDoControlBar;

const styles = StyleSheet.create({
    customBtn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    btnAdd: {
        width: 60,
        height: 40,
        backgroundColor: "#4080c9",
    },
    btnClear: {
        width: 50,
        height: 40,
        backgroundColor: "#ff513d",
        marginLeft: 5,
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
});
