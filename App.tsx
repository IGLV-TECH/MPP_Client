import {StyleSheet, Text, TextInput, View} from 'react-native';
import QRCode from "react-native-qrcode-svg";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native";
import {TouchableOpacity} from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import HomeScreen from "./src/GUI/HomeScreen";
import Balance from "./src/GUI/Balance";
import Statistics from "./src/GUI/Statistics";
import LoadLogin from "./src/GUI/Login";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoadLogin} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Balance" component={Balance} />
                <Stack.Screen name="Statistics" component={Statistics} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
