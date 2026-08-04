import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export const useAuth = () => useContext(AuthContext);

export const useLogin = () => useAuth()?.login!;
export const useLogout = () => useAuth()?.logout!;
export const useRegister = () => useAuth()?.register!;