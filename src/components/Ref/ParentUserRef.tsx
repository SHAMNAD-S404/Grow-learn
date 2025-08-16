
import React,{useRef} from "react";
import { ChildNode } from "./ForwardRef";

export const ParentUseRef : React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.focus()
    }

    return(
        <div>
            <ChildNode ref={inputRef} submitButtonHandle={handleClick}   />
        </div>
    )

}