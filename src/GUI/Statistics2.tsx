import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { BarChart, Grid } from 'react-native-svg-charts';

export default function Statistics({ navigation }) {
    const handleBackButton = () => {
        navigation.replace("HomeScreen");
    };

    const data = [
        { label: 'Paper', percentage: 15 },
        { label: 'Plastic', percentage: 25 },
        { label: 'Metal', percentage: 20 },
        { label: 'Electronics', percentage: 40 },
    ];

    return (
        <View style={styles.container}>
            <StatisticBarChart data={data} />
            <View style={styles.buttonRow}>

                <TouchableOpacity style={styles.button2} onPress={handleBackButton}>
                    <Text style={styles.wallet}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const StatisticBarChart = ({ data }) => {
    const labels = data.map(item => item.label);
    const percentages = data.map(item => item.percentage);

    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <BarChart
                style={{ flex: 1, height: 200 }} // Adjust the height as needed
                data={percentages}
                yAccessor={({ item }) => item}
                svg={{ fill: 'rgba(0, 65, 244, 0.8)' }}
                contentInset={{ top: 20, bottom: 10 }}
            >
                <Grid />
            </BarChart>
            <View style={{ marginLeft: -40, justifyContent: 'center' }}>
                {percentages.map((percentage, index) => (
                    <Text key={index} style={{ marginBottom: 5 }}>{`${labels[index]} (${percentage}%)`}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
        marginTop: 150,
        marginLeft: 60,
        marginRight: 47
    },
});
