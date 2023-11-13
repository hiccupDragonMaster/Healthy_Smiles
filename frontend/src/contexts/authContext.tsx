'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, AuthContextProps } from '../types';

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const AuthProvider = ({ children }: AuthProviderProps) => {

    const handleTokenExpiry = async () => {
        try {
            const response = await fetch('/api/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh_token: 'your-refresh-token',
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to refresh token');
            }

            localStorage.setItem('authToken', data.access_token);
            // Update your user context or state with the new token
        } catch (error) {
            console.error(error);
            // Handle error, possibly logging out the user
        }
    };

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            // TODO: Fetch user data or validate token with API
            setUser({ token } as unknown as User);
        }
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to log in.');
            }

            localStorage.setItem('authToken', data.user.access_token);
            setUser(data.user);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    };


    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value= {{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
  );
};

export const useAuth = (): Partial<AuthContextProps> => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
