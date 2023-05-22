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
            <Text style={styles.balance}>Balance:</Text>
            <QRCode
                size={350}
                // value={QRTextValue ? QRTextValue : 'NA'}
                // logo={{uri: QRLogoImage}}
                logoSize={60}
                logoBackgroundColor='transparent'
                //getRef={ref}
            />
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={handleStatisticsButton}>
                    <Text style={styles.statistics}>Statistics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handleWalletButton}>
                    <Text style={styles.wallet}>Wallet</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: 105,
        height: 51,
        backgroundColor: "#E6E6E6"
    },
    statistics: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 11
    },
    button2: {
        width: 105,
        height: 51,
        backgroundColor: "rgba(230,230,230,1)",
        marginLeft: 51
    },
    wallet: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 12,
        marginLeft: 25
    },
    buttonRow: {
        height: 51,
        flexDirection: "row",
        marginTop: 730,
        marginLeft: 52,
        marginRight: 47
    },
    balance: {
        fontFamily: "comic-sans-ms-regular",
        color: "#121212",
        height: 34,
        width: 193,
        fontSize: 18,
        marginTop: -745,
        marginLeft: 15
    }
});

export default LoadHomeScreen;