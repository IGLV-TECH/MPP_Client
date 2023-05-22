import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button, Alert} from "react-native";

function Balance({navigation}) {

    const handleBackButton = () => {
        navigation.replace('HomeScreen');
    }

    const handleNotificationButton = () => {
        Alert.alert("Notification", "Your request has been sent");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.value}>You have 44,6 lei in your account</Text>
            <TouchableOpacity style={styles.button1} onPress = {handleNotificationButton}>
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
    generate: {
        width: 175,
        height: 45,
        backgroundColor: "rgba(230,191,131,1)",
        marginTop: 60,
        marginLeft: 20
    },
    balance: {
        color: "#121212",
        fontSize: 23,
        marginTop: 59,
        alignSelf: "center"
    },
    value: {
        color: "#121212",
        fontSize: 23,
        marginTop: 240,
        alignSelf: "center"
    },
    button1: {
        width: 105,
        height: 51,
        backgroundColor: "rgba(230,230,230,1)",
        marginTop: 250,
        marginLeft: 140
    },
    withdraw: {
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
        marginLeft: 140
    },
    back: {
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 32
    }
});

export default Balance;
