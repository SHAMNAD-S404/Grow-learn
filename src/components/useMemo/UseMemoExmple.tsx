import type React from "react"
import { useMemo, useState } from "react";


interface User {
    id: number;
    name: string;
    isActive: boolean;
  }


export const UseMemoExample : React.FC = () => {
    const [refresh,setRefersh] = useState<boolean>(false);

    const handleRefresh = () => setRefersh((prev) => !prev);
    const [users] = useState<User[]>([
        { id: 1, name: "Alice", isActive: true },
        { id: 2, name: "Bob", isActive: false },
        { id: 3, name: "Charlie", isActive: true },
      ]);

      const filteredUser = useMemo(() => {
        console.log("function re - rendered");
        return users.filter(user => user.isActive)
      },[]);

    return(
        <>
        <h1 className="text-center text-3xl text-red-500">Use memo exmple Page</h1>
        <ul>
            <h2 className="text-2xl text-blue-400">active users</h2>
            {filteredUser.map((user,index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
        <h2 className="text-2xl text-violet-600">refresh state : {refresh ? "hai" : "helo"}</h2>
        <button className="text-blue-600 bg-green-600 cursor-pointer" onClick={handleRefresh}>Refresh karo</button>
        </>
    )
}