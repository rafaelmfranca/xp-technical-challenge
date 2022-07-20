import useAuth from '@/hooks/useAuth';
import { api, fetcher } from '@/lib/axios';
import { Asset, AssetPurchasePayload, AssetsContextData } from '@/types/shared';
import { ReactNode, useEffect, useState } from 'react';
import useSWR from 'swr';
import AssetsContext from './context';

type AssetsProviderProps = {
  children: ReactNode;
};

export default function AssetsProvider({ children }: AssetsProviderProps) {
  const { clientId } = useAuth();

  const { data: assets } = useSWR('/api/ativos', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  const { data } = useSWR(`/api/investimentos/${clientId}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  const [availableAssets, setAvailableAssets] = useState<Asset[]>([]);
  const [investments, setInvestments] = useState<Asset[]>([]);

  useEffect(() => {
    if (assets) {
      setAvailableAssets(assets);
    }
  }, [assets]);

  useEffect(() => {
    if (data) {
      setInvestments(data);
    }
  }, [data]);

  const handleAssetPurchase = async ({
    assetId,
    purchaseQuantity,
  }: AssetPurchasePayload) => {
    await api.post('api/investimentos/comprar', {
      clientId,
      assetId,
      purchaseQuantity,
    });
  };

  const contextValue: AssetsContextData = {
    availableAssets,
    investments,
    handleAssetPurchase,
  };

  return (
    <AssetsContext.Provider value={contextValue}>
      {children}
    </AssetsContext.Provider>
  );
}
