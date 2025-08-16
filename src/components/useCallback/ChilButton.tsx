import React from "react";

interface ChilButtonProps{
    onclicks : () => void;
    lables : string;
}


export const ChildButton : React.FC<ChilButtonProps> = React.memo(
    ({lables,onclicks}) => {
        return <button onClick={onclicks}>{lables}</button>
    }
)