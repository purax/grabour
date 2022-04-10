import { useSelector, useDispatch } from "react-redux";

export function puru()
{
    const theme = useSelector( ( state ) => state.themereducer.theme );
    return (
        theme
    );
}