import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Text, Button} from "react-native";
import QRCode from "react-native-qrcode-svg";

function LoadHomeScreen({navigation}) {
    const [QRvalue, setQRValue] = React.useState('');

    const handleStatisticsButton = () => {
        navigation.replace('Statistics');
    }

    const handleWalletButton = () => {
        navigation.replace('Balance');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.balance}>Balance: 44,6 lei</Text>
            <View gradientImage="Gradient_gCW6jl9.png" style={styles.generate}>

                <QRCode
                    size={350}
                    // value={QRTextValue ? QRTextValue : 'NA'}
                    // logo={{uri: QRLogoImage}}
                    logoSize={60}
                    logoBackgroundColor='transparent'
                    //getRef={ref}
                />
            </View>

            <View style={styles.buttonRow}>

                <TouchableOpacity style={styles.button2} onPress={handleWalletButton}>
                    <Text style={styles.wallet}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={handleStatisticsButton}>
                    <Text style={styles.statistics}>Statistics</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    // button: {
    //     width: 105,
    //     height: 51,
    //     backgroundColor: "#E6E6E6"
    // },
    generate: {
        width: 175,
        height: 45,
        backgroundColor: "rgba(230,191,131,1)",
        marginTop: 60,
        marginLeft: 20
    },
    statistics: {
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 11
    },
    button1: {
        width: 105, //105
        height: 51, //51
        backgroundColor: "rgba(0, 123, 255, 1)",
        marginLeft: 25
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
        marginLeft: 25
    },
    buttonRow: {
        height: 51,
        flexDirection: "row",
        marginTop: 450,
        marginLeft: 75,
        marginRight: 47
    },
    balance: {
        color: "#121212",
        height: 34,
        width: 193,
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10
    }
});

export default LoadHomeScreen;