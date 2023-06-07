import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Text, Button} from "react-native";
import QRCode from "react-native-qrcode-svg";

function Electric({navigation}) {
    const [QRvalue, setQRValue] = React.useState('');


    const handleBackButton = () => {
        navigation.replace('Generate');
    }

    const QRTextValue = "1,ELECTRIC_AND_ELECTRONICS";

    return (
        <View style={styles.container}>

            <View gradientImage="Gradient_gCW6jl9.png" style={styles.generate}>

                <QRCode
                    size={350}
                    value={QRTextValue ? QRTextValue : 'NA'}
                    // logo={{uri: QRLogoImage}}
                    logoSize={60}
                    logoBackgroundColor='transparent'
                    //getRef={ref}
                />
            </View>
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
        marginTop: 200,
        marginLeft: 20
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
    buttonRow: {
        height: 51,
        flexDirection: "row",
        marginTop: 400,
        marginLeft: 140,
        marginRight: 47
    },

});

export default Electric;