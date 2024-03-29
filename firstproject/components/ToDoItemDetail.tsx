import React from "react";
import {
    Button,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface Props {
    visible: string;
    setVisible: React.Dispatch<React.SetStateAction<string>>;
    itemName: string;
    itemId: number;
}

const ToDoItemDetail: React.FC<Props> = ({
    visible,
    setVisible,
    itemName,
    itemId,
}) => {
    return (
        <Modal visible={String(itemId) === visible} animationType="slide">
            <SafeAreaView style={styles.container}>
                {/* <View style={styles.container}> */}
                <Text style={styles.itemName}>Detail of: {itemName}</Text>
                <Text style={styles.itemText}>
                    Inatteso mio parrebbe vogliate pei semplice. Preferisti
                    incomincio arrossendo affaticato immutabile ed la fu
                    ribollisse di. Dio ore guardavo sul lavorato alzeremo non.
                    Aver oh ah ride mano viso ed cose lume. Ribollisse me
                    riflettere mi sollevando tranquilla la.
                </Text>
                <Button title="Go back" onPress={() => setVisible("")} />
                {/* </View> */}
            </SafeAreaView>
        </Modal>
    );
};

export default ToDoItemDetail;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40%",
        marginHorizontal: 20,
        // flex: 1,
    },
    itemName: {
        fontSize: 20,
    },
    itemText: {
        fontSize: 15,
        marginVertical: 30,
    },
});
