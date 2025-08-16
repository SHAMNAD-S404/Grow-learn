import { forwardRef } from "react";

interface ChildNodeProps{
    submitButtonHandle  : () => void
}

export const ChildNode = forwardRef<HTMLInputElement,ChildNodeProps>(({submitButtonHandle}, ref) => {
  return (
    <>
      <input ref={ref} className="bg-amber-100  p-2 mr-2" />
      <button className="cursor-pointer" onClick={submitButtonHandle} >submit</button>
    </>
  );
});
