import AssetsContext from '@/contexts/assets/context';
import { useContext } from 'react';

export default function useAssets() {
  const context = useContext(AssetsContext);
  return context;
}
