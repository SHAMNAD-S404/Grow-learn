import type React from "react";
import { Link } from "react-router-dom";


export const Navbar : React.FC = () => {
    return(
        <div className="">
            <h1 className="text-xl text-center font-semibold bg-blue-300">Welcome to Ticketflow Navabar</h1>
            <nav className="flex justify-center gap-15 mb-5 bg-yellow-300 font-semibold p-1  " >
                <Link to ="/" className="hover:text-blue-600">Home</Link>
                <Link to="profile" className="hover:text-blue-600">Go to Profile</Link>
                <Link to ="wallet" className="hover:text-blue-600">My Wallet</Link>
                <Link to ="order" className="hover:text-blue-600">My Orders</Link>              
            </nav>
        </div>
    )
}