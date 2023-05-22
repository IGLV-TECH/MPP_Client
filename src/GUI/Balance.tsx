import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";

function Balance({navigation}) {

    const handleBackButton = () => {
        navigation.replace('HomeScreen');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.balance}>Balance</Text>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.withdraw}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleBackButton}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    balance: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 23,
        marginTop: 59,
        alignSelf: "center"
    },
    button1: {
        width: 105,
        height: 51,
        backgroundColor: "rgba(230,230,230,1)",
        marginTop: 553,
        marginLeft: 127
    },
    withdraw: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 13,
        marginLeft: 11
    },
    button2: {
        width: 105,
        height: 51,
        backgroundColor: "rgba(230,230,230,1)",
        marginTop: 23,
        marginLeft: 127
    },
    back: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 32
    }
});

export default Balance;
