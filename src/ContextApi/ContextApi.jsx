import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();
const auth = getAuth(app);
const ContextApi = ({ children }) => {
  // Categories FETCHED
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  // Create USER
  const [user, setUser] = useState(null);

  // Loading
const [loading, setLoading] = useState(true)



 
  const createNewUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currenUSer)=>{
        // console.log("Observed User", currenUSer);
        setUser(currenUSer);
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
  },[])

//   LogIn User
 const logInUser = (email,password) => {
   return signInWithEmailAndPassword(auth, email, password)
 }

//   Sign Out
const logOut =()=>{
    return signOut(auth)
}



  const authInfo = {
    categories,
    createNewUSer,
    setUser,
    user,
    logOut,logInUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;
