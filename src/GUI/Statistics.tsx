import React, { Component } from "react";
import {StyleSheet, View, Slider, Text, TouchableOpacity, Button} from "react-native";

function Statistics({navigation}) {

    const handleBackButton = () => {
        navigation.replace('HomeScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.sliderStack}>
                <Slider value={50} style={styles.slider}></Slider>
                <Text style={styles.start2}>Start:</Text>
            </View>
            <Text style={styles.statistics}>Statistics</Text>
            <View style={styles.loremIpsumStack}>
                <Text style={styles.loremIpsum}></Text>
                <Text style={styles.end}>End:</Text>
                <Slider value={50} style={styles.slider1}></Slider>
            </View>
            <TouchableOpacity style={styles.button1} onPress={handleBackButton}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slider: {
        position: "absolute",
        top: 18,
        height: 58,
        width: 152,
        left: 0
    },
    start2: {
        top: 0,
        left: 50,
        position: "absolute",
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18
    },
    sliderStack: {
        width: 152,
        height: 76,
        marginTop: 110,
        marginLeft: 104
    },
    statistics: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 23,
        marginTop: -128,
        marginLeft: 127
    },
    loremIpsum: {
        top: 13,
        left: 72,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    end: {
        top: 0,
        left: 58,
        position: "absolute",
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18
    },
    slider1: {
        position: "absolute",
        top: 17,
        height: 58,
        width: 152,
        left: 0
    },
    loremIpsumStack: {
        width: 152,
        height: 75,
        marginTop: 96,
        marginLeft: 104
    },
    button1: {
        width: 105,
        height: 51,
        backgroundColor: "rgba(230,230,230,1)",
        marginTop: 463,
        marginLeft: 128
    },
    back: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 13,
        marginLeft: 32
    }
});

export default Statistics;
