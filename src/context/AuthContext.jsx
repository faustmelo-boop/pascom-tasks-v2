import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, appId } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listener de login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const agentRef = doc(
          db,
          "artifacts",
          appId,
          "public",
          "data",
          "pascom_agents",
          firebaseUser.uid
        );

        const snap = await getDoc(agentRef);
        if (snap.exists()) {
          setAgent({ id: snap.id, ...snap.data() });
        }
      } else {
        setAgent(null);
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Login
  async function login(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  // Logout
  async function logout() {
    return signOut(auth);
  }

  // Registro completo
  async function register(name, email, pass, birthDate, adminCode) {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);

    await updateProfile(cred.user, { displayName: name });

    const isAdmin = adminCode === "PASCOM2025";

    const agentRef = doc(
      db,
      "artifacts",
      appId,
      "public",
      "data",
      "pascom_agents",
      cred.user.uid
    );

    await setDoc(agentRef, {
      id: cred.user.uid,
      name,
      email,
      birthDate,
      skills: [],
      isAdmin,
      mustChangePassword: false,
    });

    return cred.user;
  }

  const value = {
    user,
    agent,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
