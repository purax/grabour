import { DefaultTheme, DarkTheme } from "@react-navigation/native";
export const darkTheme =
{
    ...DarkTheme , 
    colors : {
        mode:"dark",
        Primary_background_color:"#212121",
        Primary_text_color: "#ffffff",
        Primary_button_color: "#23a8ds" ,
        primary_button_text_color: "#ffffff",
        Status_bar_style:"Light-content"
    }
};

export const lightTheme = {
    ...DefaultTheme , 
    colors: {
        mode: "light",
        Primary_background_color: "#ffff",
        Primary_text_color: "#121212",
        primary_button_color: "#8822d9",
        Primary_button_text_color: "#ffff",
        status_bar_style: "default"
    }

}
