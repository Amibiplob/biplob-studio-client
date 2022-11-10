import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);


  const createUser = (email, password) => {
       setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  const GoogleSignIn = (googleProvider) => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const GithubSignIn = (GithubProvider) => {
    setLoader(true);
    return signInWithPopup(auth, GithubProvider);
  };
  const ResetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    LogInUser,
    Logout,
    GoogleSignIn,
    GithubSignIn,
    ResetPassword,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
