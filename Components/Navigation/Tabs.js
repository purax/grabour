import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {StyleSheet, View , Text ,TouchableOpacity} from "react-native" ; 
import HomeScreen from "../../screens/HomeScreen";
import PlanScreen from "../../screens/PlanScreen";
import UserScreen from "../../screens/UserScreen";
import SearchScreen from "../../screens/SearchScreen";
import { useWindowDimensions } from "react-native"; // <-- add this hook
import  {useTheme} from '@react-navigation/native' ;

import { Icon } from 'react-native-elements'; 

import dark from "../Color"; 






const Tab = createBottomTabNavigator();

const CustomButtonTab = ( { children, onPress } ) =>
(
    <TouchableOpacity
        onPress={onPress}
        style={styles.centerButton}
    >
        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "#9ddfd3" ,elevation :3}}>
            {children}
        </View>
    </TouchableOpacity>
);
function Tabs()
{
    const { width } = useWindowDimensions();
    const {colors} = useTheme() ;

    return (
        <Tab.Navigator  tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right:20, 
                borderRadius: 15,
                height: 90,
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor : colors.card , 
                borderTopColor: "transparent",
                ...styles.shadow,
            },
            
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) =>(
                        <View styles = {styles.tabstyle} >
                            <Icon name='home' type="antdesign" color={focused ? colors.light_blue : '#3A3B3C'}  />
                            <Text style = {{color : focused ? colors.light_blue : '#3A3B3C' }}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Plan" component={PlanScreen}
                 options={{
                    tabBarIcon: ({ focused }) =>(
                        <View>
                             <Icon name='plus' type = "antdesign" color={focused ? colors.text : '#3A3B3C'} />                        
                        </View>
                     ),
                     tabBarButton: ( props  ) =>
                     (
                         <CustomButtonTab {...props} />
                     )
                }}
            />
            <Tab.Screen name="User" component={UserScreen}
             options={{
                tabBarIcon: ({ focused }) =>(
                    <View>
                         <Icon name='user' type = "antdesign"  color={focused ? colors.light_blue : '#3A3B3C'} />
                         <Text style = {{color : focused ? colors.light_blue : '#3A3B3C' }}>User</Text>
                    </View>
                ),
                }} />
            
            
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create( {

    tabstyle: {
        alignItems: "center",
        justifyContent: "center",
        top : 10 
    },

    centerButton: {
        alignItems: "center",
        justifyContent: "center",
        top: -30,
        shadowColor: dark.green,
        
       
        
        
    },
    
    shadow: {
        shadowColor: "#7f5df0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation : 5
        
    }
})
export default Tabs;