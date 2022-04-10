import React from 'react';
import { SafeAreaView, Text, View ,StyleSheet  , ImageBackground} from "react-native";
import dark from "../Components/Color";

function SplashScreen() {
    return (
        <SafeAreaView style = {styles.container}>
            <View  style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor : dark.dark
                
            }}>
                
                <Text style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    alignSelf: "center",
                    color: dark.green,
                 
                }}
                >Homemade</Text>
             </View>
       </SafeAreaView> 
    );
}   

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center' ,
        alignItems: "center",
        height: "100%" , 
        backgroundColor : dark.white 
    }
})
export default SplashScreen;