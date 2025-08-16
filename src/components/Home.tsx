import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <div className="">
      <h1 className="text-center text-blue-500 font-semibold text-2xl ">Welcome to Home Page</h1>

      <div className="flex justify-center items-center gap-2 text-4xl font-bold">
        <button
          onClick={handleIncrement}
          className="shadow-2xl shadow-red-800 bg-yellow-300 rounded-full p-2">
          +
        </button>
        <h2>{counter}</h2>
        <button
          onClick={handleDecrement}
          className="shadow-2xl shadow-red-800 bg-yellow-300 rounded-full p-2">
          -
        </button>
      </div>

      <div className="text-center mt-5 text-3xl font-semibold hover:text-blue-600 hover:underline">
      <Link to ="/login">Go to Login Page</Link>
      </div>
      <hr />
      <nav>
        <Link to="/lazy/about"> Go to lazi about</Link>
        <Link to="/lazy/contact" > Go to contact lazy</Link>
      </nav>
    </div>
  );
};
