import { AssetsContextData } from '@/types/shared';
import { createContext } from 'react';

const AssetsContext = createContext({} as AssetsContextData);

export default AssetsContext;
