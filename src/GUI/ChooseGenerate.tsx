import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Text, Button} from "react-native";
import QRCode from "react-native-qrcode-svg";

function Generate({navigation}) {
    const [QRvalue, setQRValue] = React.useState('');

    const handlePaperButton = () => {
        navigation.replace('Paper');
    }

    const handlePlasticButton = () => {
        navigation.replace('Plastic');
    }

    const handleMetalButton = () => {
        navigation.replace('Metal');
    }

    const handleElectricButton = () => {
        navigation.replace('Electric');
    }

    const handleBackButton = () => {
        navigation.replace('HomeScreen');
    }


    return (


        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePaperButton}>
                <Text style={styles.buttonText}>Paper and cardboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePlasticButton}>
                <Text style={styles.buttonText}>Plastic and bottle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleMetalButton}>
                <Text style={styles.buttonText}>Metal and aluminium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleElectricButton}>
                <Text style={styles.buttonText}>Electric and electronics</Text>
            </TouchableOpacity>

            <View style={styles.buttonRow}>

                <TouchableOpacity style={styles.button2} onPress={handleBackButton}>
                    <Text style={styles.wallet}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonRow: {
        height: 51,
        flexDirection: "row",
        marginTop: 200,
        marginLeft: 40,
        marginRight: 47
    },
    button2: {
        width: 105, //105
        height: 51, //51
        backgroundColor: "rgba(0, 123, 255, 1)",
    },
    wallet: {
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 33
    },
});

export default Generate;