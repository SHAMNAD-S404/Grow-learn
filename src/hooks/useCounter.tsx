import { useState } from "react";


export const useCounter  = (initialValue:number=0) => {
        const [counter,setCounter] = useState<number>(initialValue);
        const increment = () => setCounter((prev) => prev+1);
        const decrement = () => setCounter((prev) => prev === 0 ? 0 : prev-1);
        const reset = () => setCounter(0);
    
        return {counter,increment,decrement,reset}
}

