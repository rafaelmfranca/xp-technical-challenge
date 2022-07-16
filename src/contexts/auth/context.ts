import { AuthContextData } from '@/types/shared';
import { createContext } from 'react';

const AuthContext = createContext({} as AuthContextData);

export default AuthContext;
