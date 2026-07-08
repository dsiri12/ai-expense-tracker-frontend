import { createContext, useEffect, useState } from 'react';
import api from '../lib/axios.js';
import { API_PATHS } from '../utils/apiPaths.js';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            // setLoading(false);
            return;
        }
        api.get(API_PATHS.AUTH.ME)
            .then((res) => setUser(res.data))
            .catch(() => localStorage.removeItem('token'))
            .finally(() => setLoading(false));
    }, []);

    const login = async (email, password) => {
        const res = await api.post(API_PATHS.AUTH.LOGIN, { email, password });
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
    };

    const register = async (payload) => {
        const res = await api.post(API_PATHS.AUTH.REGISTER, payload);

        localStorage.setItem('token', res.data.token); 
        // security issue: storing token in localStorage is not recommended for sensitive data, consider using httpOnly cookies instead
        setUser(res.data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


