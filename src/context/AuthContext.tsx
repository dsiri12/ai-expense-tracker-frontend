import { createContext, useEffect, useState } from "react";
import api from "../lib/axios.js";
import { UserResponse } from "../types/auth.types.js";
import { API_PATHS } from "../utils/apiPaths.js";
import { LoginDto, RegisterDto } from "../validate/auth.validator.js";

interface AuthContextType {
  login: (loginDto: LoginDto) => Promise<void>;
  logout: () => void;

  user: UserResponse | null;
  loading: boolean;
  register: (payload: RegisterDto) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // setLoading(false);
      return;
    }
    api
      .get(API_PATHS.AUTH.ME)
      .then((res) => setUser(res.data))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  const login = async (loginDto: LoginDto) => {
    const res = await api.post(API_PATHS.AUTH.LOGIN, loginDto);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (payload: RegisterDto) => {
    const res = await api.post(API_PATHS.AUTH.REGISTER, payload);

    localStorage.setItem("token", res.data.token);
    // security issue: storing token in localStorage is not recommended for sensitive data, consider using httpOnly cookies instead
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
