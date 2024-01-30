
import  { useState, useEffect, createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import {auth,db} from '../Services/firebase';
import {doc,setDoc} from 'firebase/firestore';

const AuthContext = createContext();


export function AuthContextProvider({ children }) {
   
    const [user, setUser] = useState({});


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
   
        return () => {
            unsubscribe();
        };
    }, []);

 
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db,"users",email),
        {
            favshow:[],
        });
    }

 
    function LogIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    function logOut() {
        return signOut(auth);
    }

   
    return (
        <AuthContext.Provider value={{ user, signUp, LogIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}




