import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();
  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/login");
        }
      })
      .catch((error) => alert(error.message));
    return;
  }
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/dash");
        }
      })
      .catch((error) => alert(error.message));
    return;
  }
  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    return;
  }
  async function resetPass(email) {
    return sendPasswordResetEmail(auth, email).then((a) => {
      alert("Password reset email sent");
    });
  }

  async function updateMail(email) {
    return updateEmail(currentUser, email).then((a) => {
      alert("Email has been Updated");
    });
  }
  async function updatePass(password) {
    return updatePassword(currentUser, password).then((a) => {
      alert("Password has been Updated");
    });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPass,
    updateMail,
    updatePass,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
