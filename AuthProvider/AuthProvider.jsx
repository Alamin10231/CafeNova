import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import { auth } from "../Firebase/Firebaseconfig";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  // Listen for auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = ()=>{
                     setloading(true);
    return signOut(auth)
      .then(() => {
        setUser(null); // user স্টেটকে null সেট করুন
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        throw error;
      });
  }
  const signinwithgoogle = () => {
    setloading(true);
    const Provider = new GoogleAuthProvider();
    return signInWithPopup(auth, Provider);
  };



  const authInfo = {
    user,
    loading,
    login,
    signup,
     signinwithgoogle,
     logout,

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
