import type React from "react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

 
export const Login : React.FC  = () => {

    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const {updateUserName,updatePassword} = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        //updating context value
        updateUserName(name);
        updatePassword(password)
        // navigating to the dashboard
        navigate("/dashboard")
    }

    return(
        <div >
            <h1 className="text-center bg-violet-600/70 ">Login Page</h1>
            <div className="flex flex-col  gap-2">
                <div className="flex gap-5 justify-center items-center mt-5">
                    <label htmlFor="">User Name</label>
                    <input 
                     onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Enter your name" className="bg-blue-200 border border-t-2 border-blue-500  p-3 rounded-4xl "  />
                </div>
                <div className="flex flex-co gap-7 justify-center  items-center mt-5">
                    <label htmlFor="">password</label>
                    <input
                     onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Enter your name" className="bg-gray-200 border border-t-2 border-blue-500  p-3 rounded-4xl "  />
                </div>
                <div className="flex justify-center mt-8 ">
                   <button
                    onClick={handleLogin}
                   className=" px-8 py-2 rounded-full font-semibold bg-black text-white">Submit</button>
                </div>
            </div>
            <hr className="mt-6"/>
            <>
                <h1>name will come here : {name}</h1>
                <h1>password will come here : {password}</h1>
            </>
        </div>
    )
}