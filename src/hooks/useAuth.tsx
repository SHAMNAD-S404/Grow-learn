import {useContext} from "react";
import { AuthContext, type authContextInterface } from "../context/authContext";


export const useAuth = () : authContextInterface => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("wrap component insider the provider");
    }
    return context;
}