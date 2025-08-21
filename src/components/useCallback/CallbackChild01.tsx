import React, { useEffect } from "react";

interface CallbakChild01Props {
  increase: () => void;
}

export const CallbakChild01: React.FC<CallbakChild01Props> = React.memo(({ increase }) => {
    useEffect(() => {
        console.log('child re-rendered')
    },[])
  return (
    <>
      <button
        onClick={increase}
        className="font-semibold text-white bg-black rounded-2xl px-4 py-1 cursor-pointer">
        Increase
      </button>
    </>
  );
});
