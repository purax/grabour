import React , {useState} from 'react';
import { SafeAreaView, Text, View ,StyleSheet  , TextInput , TouchableOpacity , KeyboardAvoidingView , StatusBar ,  ImageBackground , platform} from "react-native";
import { Icon } from 'react-native-elements'; 
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { auth } from "../firebase/firebase-config";

function SignUpScreen({navigation})
{
    const {colors} = useTheme() ; 
    const[Name, SetName] = useState("");
    const[Username , SetUsername] = useState("");
    const[Password , SetPassword] = useState("");
    const[ConfirmPwd, SetConfirmPwd] = useState("");
    const [PhoneNo, SetPhoneNo] = useState();
    
    const register = () =>
    {
        let email = Username;
        let password  = Password
        auth
            .createUserWithEmailAndPassword( email, password )
            .then( ( authUser ) => {
                authUser.user.updateProfile( {
                    displayName: Name,
                    photoURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FSample_User_Icon.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&tbnid=SBUlgl2FWFFpQM&vet=12ahUKEwjJo7v5yL3xAhVRHysKHcZcC2AQMygAegUIARDXAQ..i&docid=weUlBrkL55e7fM&w=512&h=512&q=user%20icon&ved=2ahUKEwjJo7v5yL3xAhVRHysKHcZcC2AQMygAegUIARDXAQ"
                    
                    
                })

            })
            .catch((error) => alert(error.message))

        
        
        
    }
    
    
     return (
         <KeyboardAvoidingView style={{ ...styles.container, backgroundColor: colors.light_blue }}>
              <StatusBar backgroundColor={colors.light_blue} barStyle="dark-content" />

             <View style={{ ...styles.header, backgroundColor: colors.light_blue }}>
                 <Text style={styles.text_header}>Sign Up</Text>
             </View>

             <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
            
                 
                 <View style={styles.row}>
                     <Icon color = "#242526"  name="user" type="antdesign" />
                     <TextInput
                     style={styles.TextInput}
                     placeholder="Name"
                     values={Name}
                     onclick={SetName}
                     />
                 </View>

                 <View style={styles.row}>
                     <Icon color = "#242526" name="email" type="fontisto" />
                     <TextInput
                     style={styles.TextInput}
                     placeholder="Email"
                     values={Username}
                     onclick={SetUsername}
                     />
                 </View>
                
                 <View style={styles.row}>
                     <Icon color = "#242526" name="smartphone" type="feather" />
                     <TextInput
                     style={styles.TextInput}
                     placeholder="Phone Number"
                     values={PhoneNo}
                     onclick={SetPhoneNo}
                     />
                     
                 </View>
                
                 <View style={styles.row}>
                     <Icon color = "#242526" name="lock1" type="antdesign" />
                     <TextInput
                      style={styles.TextInput}
                     placeholder="Password"
                     values={Password}
                     onclick={SetPassword}
                     secureTextEntry = {true}
                         
                     />
                     
                 </View>
                 
                 <View style={styles.row}>
                     <Icon color = "#242526" name="lock1" type="antdesign" />
                     <TextInput
                     style={styles.TextInput}
                     placeholder="Confirm Password"
                     values={ConfirmPwd}
                     onclick={SetConfirmPwd}
                     secureTextEntry = {true}
                     />
                     
                 </View>


                 <TouchableOpacity style = {styles.Submit} onPress={register}>
                     <Text style = {styles.btntext}> Create Account</Text>
                 </TouchableOpacity>

                 <View style={{
                        justifyContent: "center",
                     alignItems: "center",
                        marginTop : 30
                    
                         
                        
                    }}>
                     
                     <Text style={{
                         color: "#3A3B3C"
                     }}>
                         Already have an Account ? <Text style={{ color: colors.light_blue }} onPress={() => navigation.navigate( "LoginScreen" )}> Sign In </Text>
                     </Text>
                      
                    </View>

                 
             </Animatable.View>
       </KeyboardAvoidingView> 
    );
}   

const styles = StyleSheet.create({
    container: {
        flex : 1 , 
            
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
        height:50,
        width : 300,
        margin: 10,
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        flexDirection : "row",
        fontWeight: "bold",
        borderRadius: 10,
        backgroundColor : "#eeeeee"
        
        
        
        

    },
    TextInput: {
        padding: 5,
        fontSize: 15,
        alignItems: "center",
        fontWeight: "bold" , 
        paddingLeft: 10,
        height: 50,
        flex: 1,

        
        
        
    },
    Submit: {
        backgroundColor:"#9ddfd3",
        height:50,
        width : 300,
        margin: 10,
        color: "#fff",
        alignItems : "center",
        textAlign: "center",
        fontSize: 20,
        borderRadius : 10
        
        
    },
    btntext: {
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        width: "100%",
        height : "100%",
        textAlignVertical : "center",
        fontWeight : "bold"
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:40
    },



})
export default SignUpScreen;