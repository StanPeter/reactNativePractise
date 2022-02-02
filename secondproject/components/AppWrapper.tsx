import React, { ReactChild, ReactChildren } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactChild | ReactChildren;
}

const AppWrapper: React.FC<Props> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            {children}
            <Footer />
        </SafeAreaView>
    );
};

export default AppWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde3eb",
    },
});
