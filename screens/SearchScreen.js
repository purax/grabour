import React from 'react';
import { Text, View, StyleSheet, SafeAreaView ,TextInput , TouchableOpacity} from 'react-native';
import dark from "../Components/Color";
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';



function SearchScreen( { navigation } )
{
    const {colors} = useTheme() ; 
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.Actionbar}>
            <View
                style={{
                    
                        alignItems: "flex-start",
                        position: "absolute",
                        left : 10
                    }}>
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Icon name="arrow-back" type="lonicons" color={dark.green} />
                    </TouchableOpacity>
                    
                </View>
                <Text style = {{color : dark.white , fontSize : 22}}>Search</Text>
                </View>


            <View>

            </View>
            <View
                style={{
                    position: "absolute",
                    top: "20%",
                    width : "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
            <View style = {styles.searchbar}>
                    <Icon name="search1" type="antdesign" color={dark.green}
                        style={{marginLeft: 10 }}/>
                        <TextInput style={styles.searchbox}
                            placeholder="Search here .... "
                            placeholderTextColor={dark.lightdark}
                           
                        />
                    </View>

            </View>
        </SafeAreaView>
    );
}

export default SearchScreen;
const styles = StyleSheet.create( {
    Actionbar: {
        flexDirection: "row",
        position: "absolute",
        height: 60,
        padding: 5,
        elevation: 15,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
     
        
        
       

        
    },
    container: {
        backgroundColor : dark.black ,
        height: "100%",
        width : "100%",
        color : "#fff"
    },
    
    searchbar: {
        height:60,
      
        margin: 15,
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        flexDirection : "row",
        fontWeight: "bold",
        elevation: 15 , 
        marginLeft:0,
        marginRight: 0 ,
        width: 300,
        borderWidth: 2,
        
      

        
        
        
        
    },
    searchbox: {
        marginLeft : 5,
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        fontWeight: "bold" , 
        paddingLeft: 15,
       
        width: "80%",

        
                
        
    },
    
})