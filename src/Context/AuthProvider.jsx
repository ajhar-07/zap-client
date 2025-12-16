import React from 'react';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
       const [user,setUser]=useState(null)
       const [loading,setLoading]=useState(false)
       
       const Register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
       }
      
      const Login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

     const googlelogin=()=>{
        return signInWithPopup(auth,provider)
     }


     const Logout=()=>{
        return signOut(auth)
     }


     const updateUserprofile=(profile)=>{
      return updateProfile(auth.currentUser,profile)
     }
     
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


    const AuthInfo={
        user,
        loading,
        Register,
        Login,
        googlelogin,
        Logout,
        updateUserprofile
    }
    return (
       <AuthContext value={AuthInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;