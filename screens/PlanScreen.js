import React from 'react';
import {View , Text, StyleSheet, SafeAreaView} from 'react-native' ; 
import dark from "../Components/Color"; 

function PlanScreen() {
    return (
        <SafeAreaView>
            <View style = {styles.constainer}>
                <Text style = {{ color : dark.white}}>PlanScreen</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    constainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: dark.black,
        height : "100%"
    }
})
export default PlanScreen;