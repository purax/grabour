import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, TextInput, StatusBar, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { auth, db } from "../firebase/firebase-config";
import firebase from "firebase";


function LoginScreen( { navigation } )
{
    const { colors } = useTheme();

    useEffect( () =>
    {
        const unsubscribe = auth.onAuthStateChanged( ( authUser ) =>
        {
            if ( authUser )
            {
                navigation.replace( "Tabs" );
            }
        } );
        return unsubscribe;
    }, [] );

    const writeUserData = async () =>
    {
        console.log( "clicked" );
        /*await db.collection("users")
            .add(
           {
               username: "name",
               email: "email",
               profile_picture: "photo"
            })
            .then( () => { navigation.navigate( "Tabs" ) } )
            .catch(error => alert(error) )*/


        const post = db.collection( "users" );
        const whe = post.where( "name", "==", "puru" );
        whe.get()
            .then( doc =>
            {
                console.log( doc.data() )
            } )


    }



    return (

        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.light_blue }}>
            <StatusBar backgroundColor={colors.light_blue} barStyle="dark-content" />

            <View style={{ ...styles.header, backgroundColor: colors.light_blue }}>
                <Text style={styles.text_header}>
                    Login
                </Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}>
                <View style={styles.row}>
                    <Icon name="user" type="antdesign" />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Username" />
                </View>

                <View style={styles.row}>
                    <Icon name="lock" type="antdesign" />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        secureTextEntry={true} />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => { writeUserData() }}>
                        <Text style={styles.btntext}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 25
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate( "SignUpScreen" )}>
                            <Text style={{ color: colors.light_blue }}>
                                Create An Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: 'black'
                            }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: 'black'
                            }} />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                            justifyContent: "center"
                        }}>
                        <TouchableOpacity>
                            <Icon name="google" type="antdesign" style={{ margin: 15, fontSize: 40 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="facebook-square" type="antdesign" style={{ margin: 15, fontSize: 40 }} />
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 25
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate( "SearchScreen" )}>
                            <Text style={{
                                color: colors.light_blue
                            }}>
                                Forget Password ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create( {

    container: {
        flex: 1,

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50


    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: "center",

    },
    row: {
        height: 50,
        width: 300,
        margin: 10,
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        flexDirection: "row",
        fontWeight: "bold",
        borderRadius: 10,
        backgroundColor: "#eeeeee"





    },
    input: {
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        fontWeight: "bold",
        paddingLeft: 10,
        height: 50,
        flex: 1




    },
    login: {
        backgroundColor: "#9ddfd3",
        height: 50,
        width: 300,
        margin: 10,
        color: "#fff",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        borderRadius: 10


    },
    btntext: {
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        width: "100%",
        height: "100%",
        textAlignVertical: "center",
        fontWeight: "bold"
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },

} )
export default LoginScreen;