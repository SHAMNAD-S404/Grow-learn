import React, { useReducer } from "react";

export const UserReducerCounter: React.FC = () => {
  interface ICount {
    count: number;
  }

  type actionTypes =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "set"; payload: number };

  const reducerActions = (state: ICount, action: actionTypes): ICount => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      case "set":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducerActions, { count: 0 });

  return (
    <>
      <h1 className="text-center text-3xl">Welcome to Counter</h1>
      <h1 className="text-center text-3xl">COUNT IS : {count.count}</h1>
      <div className="flex flex-col">
        <button className="cursor-pointer" onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button className="cursor-pointer" onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button className="cursor-pointer" onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
        <button className="cursor-pointer" onClick={() => dispatch({ type: "set", payload: 10 })}>
          set
        </button>
      </div>
    </>
  );
};
