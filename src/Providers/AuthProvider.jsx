import { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Create AuthContext
export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login 
  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  // Logout 
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
};




  // Check for authenticated user on initial load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false once the auth state is determined
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
