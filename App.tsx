import {StyleSheet, Text, TextInput, View} from 'react-native';
import QRCode from "react-native-qrcode-svg";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native";
import {TouchableOpacity} from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
//import HomeScreen from "./src/GUI/HomeScreen";
import HomeScreenModified from "./src/GUI/HomeScreenModified";
import Balance from "./src/GUI/Balance";
//import Statistics from "./src/GUI/Statistics";
import Statistics from "./src/GUI/Statistics2";
import LoadLogin from "./src/GUI/Login";
import Plastic from "./src/GUI/Plastic";
import Metal from "./src/GUI/Metal";
import Paper from "./src/GUI/Paper";
import Electric from "./src/GUI/Electric";
import Generate from "./src/GUI/ChooseGenerate";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoadLogin} />
                <Stack.Screen name="HomeScreen" component={HomeScreenModified} />
                <Stack.Screen name="Balance" component={Balance} />
                <Stack.Screen name="Statistics" component={Statistics} />
                <Stack.Screen name="Generate" component={Generate} />
                <Stack.Screen name="Paper" component={Paper} />
                <Stack.Screen name="Plastic" component={Plastic} />
                <Stack.Screen name="Metal" component={Metal} />
                <Stack.Screen name="Electric" component={Electric} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
