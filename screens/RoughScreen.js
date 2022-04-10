import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { VictoryPie } from 'victory-native';

export default function RoughScreen()
{
    const graphicData = [{ y: 10 }, { y: 50 }, { y: 40 }];
    const graphicColor = ['#388087', '#6fb3b8', '#badfe7'];

    return (
        <SafeAreaView style={{ marginTop: 100 }}>
            <View style={styles.container}>
                <VictoryPie data={graphicData} width={250} height={250} colorScale={graphicColor} innerRadius={50} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create( {} )
