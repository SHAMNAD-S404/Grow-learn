import type React from "react";
import { useState } from "react";
import { CallbakChild01 } from "./CallbackChild01";


export const CallbakParent : React.FC = () => {
    const [counter,setCounter] = useState<number>(0);

    const handleIncrement = () => setCounter((prev) => prev+1);

    return (
        <>
        <h1 className="text-center text-2xl text-red-500">Use Callback Page</h1>
        <h1 className="text-center text-2xl text-blue-500">{counter}</h1>
        <CallbakChild01 increase={handleIncrement} />
        </>
    )
}