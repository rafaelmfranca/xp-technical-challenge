import { AccountContextData } from '@/types/shared';
import { createContext } from 'react';

const AccountContext = createContext({} as AccountContextData);

export default AccountContext;
