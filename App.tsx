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

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Balance" component={Balance} />
                <Stack.Screen name="Statistics" component={Statistics} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


// import React, { Component } from "react";
// import {
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text
// } from "react-native";
//
// function MainWindowClient(props) {
//   const [QRvalue, setQRValue] = React.useState('');
//   const [QRLogo, setQRLogo] = React.useState('');
//   const [QRImage, setQRImage] = React.useState('');
//   const ref = React.useRef();
//   return (
//       <View style={styles.container}>
//         <StatusBar animated backgroundColor="rgba(192,79,79,1)" />
//         <View style={styles.rect}></View>
//         <View gradientImage="Gradient_gCW6jl9.png" style={styles.generate}>
//           <QRCode
//               size={350}
//               logoSize={60}
//               logoBackgroundColor='transparent'
//               //getRef={ref}
//           />
//           <TouchableOpacity style={styles.generateButton}>
//             <Text style={styles.generateQrCode}>Generate QrCode</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.rect2}>
//           <TouchableOpacity style={styles.exportButton}>
//             <Text style={styles.exportQrCode}>Export QrCode</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,1)"
//   },
//   rect: {
//     width: 259,
//     height: 243,
//     backgroundColor: "#E6E6E6",
//     marginTop: 177,
//     alignSelf: "center"
//   },
//   generate: {
//     width: 175,
//     height: 45,
//     backgroundColor: "rgba(230,191,131,1)",
//     marginTop: 88,
//     marginLeft: 92
//   },
//   generateButton: {
//     width: 175,
//     height: 45,
//     backgroundColor: "rgba(255,160,122,1)"
//   },
//   generateQrCode: {
//     fontFamily: "roboto-regular",
//     color: "rgba(172,40,40,1)",
//     fontSize: 21,
//     marginTop: 10,
//     marginLeft: 8
//   },
//   rect2: {
//     width: 175,
//     height: 45,
//     backgroundColor: "rgba(230,191,131,1)",
//     marginTop: 49,
//     marginLeft: 92
//   },
//   exportButton: {
//     width: 175,
//     height: 45,
//     backgroundColor: "rgba(230,191,131,1)"
//   },
//   exportQrCode: {
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 21,
//     marginTop: 10,
//     marginLeft: 20
//   }
// });
//
// export default MainWindowClient;
//
