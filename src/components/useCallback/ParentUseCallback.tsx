import React,{useCallback, useState} from "react";
import { ChildButton } from "./ChilButton";



export const ParentUseCallback : React.FC = () => {
    const [counter,setCounter] = useState<number>(0);
    const [anotherCounter, setAnotherCounter] = useState<number>(0);

    //without callback
    //const increment = () => setCounter((prev) => prev+1);

    const increment = useCallback(() => {
        setCounter((prev) => prev+1);
    },[]);

    const increment2 = () => setAnotherCounter((prev) => prev+1)

    return(
        <>
        <h1 className="text-center text-3xl text-red-600">{counter}</h1>
        <h1 className="text-center text-3xl text-violet-800-600">{anotherCounter}</h1>

        <div className="flex flex-col cursor-pointer">
            <ChildButton lables="incrementss" onclicks={increment} />
            <button onClick={increment2}>second increment</button>

        </div>
        </>
    )
}