import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext(false);

export function AuthProvider ({ children }) {
    const [currentUser,setCurrentUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setCurrentUser(user)
        });
    },[]);

    return (
       <AuthContext.Provider value={{ currentUser }}>
        { children }
       </AuthContext.Provider> 
    )
}