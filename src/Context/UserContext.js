import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
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
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    return signOut(auth);
  };
  const GoogleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };
  const GithubSignIn = (GithubProvider) => {
    return signInWithPopup(auth, GithubProvider);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
