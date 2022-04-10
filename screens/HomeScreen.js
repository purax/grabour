import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button , SafeAreaView, StatusBar, Alert ,Image, ImageBackground, ScrollViewComponent, TextInput , TouchableOpacity,Platform } from "react-native" ; 
///import { Icon } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';
import dark from "../Components/Color";
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { auth , db} from "../firebase/firebase-config" ; 

import firebase from "firebase";

export default function HomeScreen( { navigation } )
{
    const[data , setadata] = useState({});
    const redirect_search_screen = () =>
    {
        navigation.navigate( "SearchScreen" );
    }
    const { colors } = useTheme();
    const doc = db.collection( 'users' ); 

    const observer = doc.onSnapshot(snapshot => {
        snapshot.forEach(doc => {
            console.log( doc.id, '=>', doc.data() );
            setdata(doc.data())
          });
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
    return (
        <View style={{ ...styles.container, backgroundColor : colors.light_blue}}>
            <StatusBar backgroundColor={colors.light_blue} barStyle="light-content" />
            <View style={{ ...styles.header, backgroundColor: colors.light_blue }}>
                
                <View style={{ ...styles.topbar }}>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            marginLeft: 5,
                            flexDirection: "row",
                            width: 100,
                            borderRadius: 10
                        }}>
                        <Icon
                            name="location-on"
                            type="MaterialIcons"
                            color={colors.white} />
                        <Text style={{ marginLeft: 5, color: colors.white }}>
                            location
                        </Text>
                    </TouchableOpacity>
               

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginLeft: 5 }}>
                            <Icon name="hearto"
                                type="antdesign"
                                color={colors.white} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft : 10} }>
                            <Icon name="shopping-bag"
                                type="feather"
                                color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ ...styles.searchbar, backgroundColor: colors.lighest_blue }}>
                        <Icon name="search1"
                            type="antdesign"
                            color={colors.light_blue}
                            style={{ marginLeft: 10 }} />
                        <TextInput style={{ marginLeft: 10, width: "100%" }}
                            placeholder="Search here .... "
                            placeholderTextColor={dark.lightdark}
                        />
                    </View>
                </View>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, { backgroundColor: colors.background }]}>
                
                    <Text>{data.key()}</Text>
                
            </Animatable.View>
        </View>
    
);
}
 
const styles = StyleSheet.create({
   container: {
        flex: 1, 
    },
    header: {
          flex: 1,
          justifyContent: 'flex-start',
          paddingTop: 20,
          marginBottom : 10
          
          
    },
    footer: {
          flex: 5,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
    },
    text_header: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize:18,
          alignItems: "center",
    },
   
    topbar: {
        flexDirection: "row",
        width: "90%",
        alignSelf : "center",
        alignItems: 'center',
        marginBottom:20,
        justifyContent: "space-between",
    
        
        
    },
    
    searchbar: {
        height:40,
        padding: 5,
        fontSize: 15,
        flexDirection : "row",
        fontWeight: "bold",
        width:"90%",
        borderRadius: 10,
        opacity: 0.5,
        alignItems: 'center',
        marginBottom : 8 , 
        alignSelf: "center",
        

        
        

    },



} )
   




