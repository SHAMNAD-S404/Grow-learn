import type React from "react";
import { Index } from "./routes";
import { AuthProvider } from "./context/authContext";


export const App : React.FC = () => {
  return(
    <div>
      <AuthProvider>
        <Index/> 
      </AuthProvider>    
    </div>
  )
}