import React, { createContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined | any>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus().then((status) => setIsAuthenticated(status));
  }, []);

  const login = () => {
    // Logic đăng nhập
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logic đăng xuất
    setIsAuthenticated(false);
    // localStorage.removeItem("token"); // Remove token on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const checkAuthStatus = async () => {
  const token = "";
  if (!token) return false;
  try {
    const decoded: any = jwtDecode(token); // Use jwt_decode instead of jwtDecode
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false; // Token expired
    }
    return true; // Token valid
  } catch (error) {
    return false; // Invalid token
  }
};

export { AuthProvider, AuthContext };
