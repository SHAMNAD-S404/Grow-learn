import React from "react";
import { useCounter } from "../hooks/useCounter";

export const HookCounter: React.FC = () => {
  const { counter, decrement, increment, reset } = useCounter(5);
  return (
    <>
      <h1 className="text-center text-3xl text-red-500">Counter using custome hook</h1>
      <h1 className="text-center text-3xl text-red-500">live count : {counter}</h1>
      <div className="flex flex-col">
        <button onClick={increment} className="cursor-pointer">
          Increment
        </button>
        <button onClick={decrement} className="cursor-pointer">
          Decrement
        </button>
        <button onClick={reset} className="cursor-pointer">
          reset
        </button>
      </div>
    </>
  );
};
