
import React,{createContext, useState} from "react";


export interface authContextInterface{
    username : string;
    password : string;
    updateUserName : (name : string) => void;
    updatePassword : (pass : string) => void;
}

export const AuthContext = createContext<authContextInterface | null>(null);

// CREATING CONTEXT PROVIDER

export const AuthProvider : React.FC <{children : React.ReactNode}> = ({children}) => {
    const [username,setUserName] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const updateUserName = (name:string) => {
        if(name.length > 0)setUserName(name)
    };
    const updatePassword = (pass:string) => {
        if(pass.length > 0)setPassword(pass)
    }
    return(

        <AuthContext.Provider value={{username,password,updateUserName,updatePassword}}>
            {children}
        </AuthContext.Provider>
    )
}