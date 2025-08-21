import type React from "react";
import { useEffect, useRef, useState } from "react";

export const TimerNew: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setisRunning] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleTimer = () => setisRunning((prev) => !prev);
  const handleReset = () => setTimer(0);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-violet-700">Live Counter2 Page</h1>
      <h1 className="text-center text-4xl font-semibold text-green-600">{timer}</h1>
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleTimer}
          className={`text-white px-4 font-semibold cursor-pointer rounded-3xl ${
            isRunning ? "bg-red-500" : "bg-green-500"
          }`}>
          {isRunning ? "STOP" : "START"}
        </button>
        <button
          onClick={handleReset}
          className="text-white px-4 bg-blue-500 cursor-pointer rounded-3xl font-semibold">
          Reset
        </button>
      </div>
    </>
  );
};
