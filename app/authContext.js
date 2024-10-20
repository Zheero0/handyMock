"use client";
import { createContext, useState, useContext } from "react";

// Create the Auth context
const AuthContext = createContext();

// AuthProvider component that will wrap around your app
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPro, setIsPro] = useState(false);
  // Simulate login
  const login = () => {
    setIsAuthenticated(true);
  };

  const goPro = () => {
    setIsPro(true);
  };

  // Simulate logout
  const logout = () => {
    setIsAuthenticated(false);
    setIsPro(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, goPro,  isPro }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the Auth context
export function useAuth() {
  return useContext(AuthContext);
}
