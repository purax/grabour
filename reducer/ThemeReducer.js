import { lightTheme } from "../Components/theme";
import { Switch_theme } from "../actions/ThemeAction";

const initialState = {
    theme: lightTheme
}

const themereducer = ( state = initialState, action ) =>
{
   
    switch (action.type) {
        case Switch_theme:
           
            return { theme: action.theme };
           
        default:
            return state
    }
}

export default themereducer; 