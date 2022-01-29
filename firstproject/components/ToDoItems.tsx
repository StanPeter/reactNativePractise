import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { Item } from "../global/interfaces";
import Icon from "react-native-vector-icons/AntDesign";
import ToDoItemDetail from "./ToDoItemDetail";

interface Props {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ToDoItems: React.FC<Props> = ({ items, setItems }) => {
    const [visible, setVisible] = useState('');

    // const fadeDeleteBtn = useRef(new Animated.Value(0)).current;
    const deleteItemHandler = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };
    // const animationHandler = () => {
    //     Animated.timing(fadeDeleteBtn, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true,
    //     }).start();
    // };

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.listItemWrapper}>
            <ToDoItemDetail
                setVisible={setVisible}
                visible={visible}
                itemName={item.title}
                itemId={item.id}
            />
            <TouchableOpacity onPress={() => setVisible(String(item.id))}>
                <Image
                    style={styles.listItemImg}
                    source={{
                        uri: "https://media.sketchfab.com/models/7f38408b6dfb48c2a19fc9d76841abd8/thumbnails/9690a1be3329402bbe5a307bb5400762/f04404ddc1f942ce873668c41a0d66e9.jpeg",
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.listItem}>{item.title}</Text>
            {/* <Animated.View style={{ opacity: fadeDeleteBtn }}> */}
            <TouchableOpacity
                onPress={() => deleteItemHandler(item.id)}
                style={styles.deleteIconWrapper}
            >
                <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
            {/* </Animated.View> */}
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
    deleteIconWrapper: {
        paddingVertical: 5,
        paddingLeft: 15,
        paddingRight: 5,
        // borderWidth: 1,
    },
    deleteIcon: {
        color: "#ff513d",
        fontSize: 20,
    },
});
