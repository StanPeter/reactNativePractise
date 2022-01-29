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
    title: String;
    headerStyle?: Object;
    // setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Header: React.FC<Props> = ({ title, headerStyle }) => {
    // const [name, setName] = useState("");

    // const addingHandler = () => {
    //     setItems((prevValue: Item[]) => [
    //         ...prevValue,
    //         {
    //             title: name,
    //             id: Math.round(Math.random() * 1000),
    //         },
    //     ]);
    //     // setName("");
    // };

    // const clearingHandler = () => setName("");

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop: 36,
        backgroundColor: "#f7287b",
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        color: "black",
        fontSize: 18,
    },
});
