import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { Item } from "../global/interfaces";

interface Props {
    items: Item[];
}

const ToDoItems: React.FC<Props> = ({ items }) => {
    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.listItemWrapper}>
            <Image
                style={styles.listItemImg}
                source={{
                    uri: "https://media.sketchfab.com/models/7f38408b6dfb48c2a19fc9d76841abd8/thumbnails/9690a1be3329402bbe5a307bb5400762/f04404ddc1f942ce873668c41a0d66e9.jpeg",
                }}
            />
            <Text style={styles.listItem}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList
            data={items}
            style={styles.listOfItems}
            renderItem={renderItem}
            keyExtractor={(item: Item, index) => {
                return String(item.id);
            }}
            // style={styles.listOfItems}
        >
            {/* {items.length > 0 ? (
                    items.map((item, i) => (
                        <Text style={styles.listItem} key={i}>
                            {item}
                        </Text>
                    ))
                ) : (
                    <Text style={styles.listItem}>
                        Unfortunately, no items added
                    </Text>
                )} */}
        </FlatList>
    );
};

export default ToDoItems;

const styles = StyleSheet.create({
    listOfItems: {
        margin: 20,
    },
    listItemWrapper: {
        marginBottom: 20,
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingRight: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 15,
    },
    listItem: {
        fontSize: 20,
        fontWeight: "800",
        fontStyle: "italic",
    },
    listItemImg: {
        height: 30,
        width: 80,
        borderRadius: 50,
    },
});
