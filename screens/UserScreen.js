import React ,{ useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Button } from 'react-native';
import dark from "../Components/Color";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../actions/ThemeAction";
import { lightTheme, darkTheme } from "../Components/theme";
import styled, { ThemeProvider } from "styled-components";
import { puru } from "../Components/themecolor";
 
function UserScreen()
{
    
    const theme = useSelector( ( state ) => state.themereducer.theme );
    const dispatch = useDispatch() ;  
    return (
       
        <SafeAreaView style={styles.container} >
            <View>
                <Text >UserScreen</Text>
                {
                    theme.colors.mode === "light" ?
                        (
                            <Button onPress ={()=>dispatch(switchTheme(darkTheme))} title ="dark" />
                        ) :
                        (
                            <Button onPress ={()=>dispatch(switchTheme(lightTheme))} title ="light" />
                        )

                }
            </View>
        </SafeAreaView>
        
    );
   
}

const styles = StyleSheet.create({
    container: {
       
    }
})





export default UserScreen;