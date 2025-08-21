
import React,{useReducer} from "react";

interface counterInterface {
    counter : number;
}

type actionType = 
    | {type : "increment"}
    | {type : "decrement"}
    | {type : "reset"}
    | {type : "set" , payload : number}

const reducerAction = (state : counterInterface,action:actionType) : counterInterface => {
    switch(action.type){
        case "increment" : 
            return { counter : state.counter + 1}
        case "decrement" :
            return { counter : state.counter === 0 ? 0 : state.counter - 1 }
        case "reset" : 
            return {counter : 0}
        case "set" : 
            return {counter : state.counter + action.payload}
        default : 
            return state
    }
}


export const ReducerCounter2 : React.FC  = () => {
    const [counter,dispatch] = useReducer(reducerAction,{counter:0})
    return(
        <>
        <h1 className="text-center text-3xl text-blue-500">USER REDUCER COUNTER PAGE</h1>
        <h1 className="text-center text-3xl text-red-600">{counter.counter}</h1>
        <div className="flex flex-col justify-center">
            <button className="cursor-pointer" onClick={() => dispatch({type : "increment"})}>increment</button>
            <button className="cursor-pointer" onClick={() => dispatch({type : "decrement"})}>decrement</button>
            <button className="cursor-pointer" onClick={() => dispatch({type : "reset"})}>reset</button>
            <button className="cursor-pointer" onClick={() => dispatch({type : "set", payload:5})}>set</button>
        </div>
        </>
    )
}