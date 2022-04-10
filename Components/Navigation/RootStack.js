import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, Text, View, Button, Alert, Image, ImageBackground, ScrollViewComponent, TextInput } from "react-native";
import LoginScreen from "../../screens/LoginScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import SplashScreen from "../../screens/SplashScreen";
import SearchScreen from "../../screens/SearchScreen";
import HomeScreen from "../../screens/HomeScreen";
import RoughScreen from "../../screens/RoughScreen";

import Tabs from "./Tabs";
const Stack = createStackNavigator();
function RootStack( { Navigator } )
{
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="RoughScreen" component={RoughScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />

        </Stack.Navigator>
    );
}


export default RootStack;