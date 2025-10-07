import React, { createContext, useContext, useState } from "react";
import { adminModel } from "../models/adminModel";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  const login = async (email, password) => {
    const data = await adminModel.login(email, password);
    localStorage.setItem("adminToken", data.token);
    setToken(data.token);
    setAdmin(data.admin);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setAdmin(null);
  };
  const setAuth = (newToken, newAdmin) => {
    if (newToken) localStorage.setItem("adminToken", newToken);
    setToken(newToken);
    setAdmin(newAdmin);
  };

  return (
    <AuthContext.Provider value={{ admin, token, login, logout, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
