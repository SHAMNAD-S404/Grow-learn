// 1. Create a react component that displays a timer with initial value 0.
// 2. There should be two buttons one to start/stop, and other to reset timer.
// 3. Clicking on start will start timer from 0 and increase timer value by 1 for every second and button text should change to "stop".
// 4. Clicking on stop will pause the timer and change button text to "start".
// 5. Now click on start then timer should continue from paused value.
// 6. Clicking on reset will reset the timer to initial value 0.

import React, { useState, useRef, useEffect } from "react";

export const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isPause, setIsPause] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  //reset handling
  const handleReset = () => {
    setIsPause(false);
    setTime(0);
  };
  const hanldePause = () => setIsPause((prev) => !prev);

  useEffect(() => {
    if (isPause) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
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
  }, [isPause]);

  return (
    <>
      <h1 className="text-center text-3xl text-violet-700">Live Timer Page</h1>
      <h1 className="text-center text-3xl text-red-700">TIME : {time}</h1>
      <div className="flex gap-5 justify-center mt-5">
        <button
          onClick={hanldePause}
          className={`${isPause ? "text-white bg-green-500" : "text-white bg-red-500"} px-2 py-1 cursor-pointer`}>
          {isPause ? "STOP" : "START"}
        </button>
        <button onClick={handleReset} className="text-white bg-blue-500 p-2 cursor-pointer">
          Reset
        </button>
      </div>
    </>
  );
};
