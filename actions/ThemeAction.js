export const Switch_theme = "switch_theme";

export const switchTheme = ( theme ) =>
{
    
    return ( dispatch ) => {
        dispatch( {
            type: Switch_theme,
            theme: theme,
        } );

     
    };
}