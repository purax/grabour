import React, { useEffect , useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,  Alert ,Image ,ImageBackground , SafeAreaView  , TouchableOpacity } from 'react-native';
import axios from "axios" ; 
import  {NavigationContainer ,DefaultTheme,DarkTheme} from '@react-navigation/native' ; 
import { createStackNavigator } from '@react-navigation/stack';
import themereducer from './reducer/ThemeReducer'; 
import { Provider ,useSelector} from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AppearanceProvider } from 'react-native-appearance';
import Tab from "./Components/Navigation/Tabs";
import RootStack from "./Components/Navigation/RootStack";
const store = createStore( combineReducers( { themereducer } ) , applyMiddleware(thunk));
const Stack = createStackNavigator();




const Custome_dark_mode = {
  dark : true,
  colors: {
    primary: '#4ecca3',
    background: '#18191A',
    card: '#242526',
    text: '#fff',
    border: '#3A3B3C',
    notification: '#e4e6eb',
    light_blue: "#9ddfd3",
    dark_blue: "#31326f",
    lighest_blue: '#dbf6e9',
    orange: '#ffc93c',
    white : "#ffffff"
    
    
  }

};


const Custome_default = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#4ecca3',
    light_blue: "#9ddfd3",
    dark_blue: "#31326f",
    lighest_blue: '#dbf6e9',
    orange: '#ffc93c',
    white : "#ffffff"
    
    
  }

};




export default function App()
{
  return (
    <AppearanceProvider>
    <Provider store={store}>
         <Navigation/>
      </Provider>
    </AppearanceProvider>

  );
}

export function Navigation()
{
  let theme = useSelector( ( state ) => state.themereducer.theme );
  return (

    <NavigationContainer theme = {theme.colors.mode === "dark" ? Custome_dark_mode: Custome_default} >
    <RootStack />
  </NavigationContainer>

  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "transparent"
  }
})

