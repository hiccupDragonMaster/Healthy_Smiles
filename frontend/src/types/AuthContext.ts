import { User } from '../types/User';

export interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>; // This is the updated type definition
    logout: () => void;
}