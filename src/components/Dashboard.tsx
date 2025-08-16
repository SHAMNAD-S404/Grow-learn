import type React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface DashboardProps{
    Nav : React.FC;
}

export const Dashboard: React.FC<DashboardProps> = ({Nav}) => {
  const {password,username} = useAuth()
  return (
    <div>
      <div className="flex justify-center items-center shadow-2xl shadow-gray-400 py-2">
        <h1 className="text-6xl text-red-500 font-semibold">Dashboard</h1>
      </div>
      <div className="">
        <h1>UserName : {username}</h1>
        <h1>Password : {password}</h1>
      </div>
      <Nav/>
     {/* nested routes will render here */}
     <Outlet/>
    </div>
  );
};
