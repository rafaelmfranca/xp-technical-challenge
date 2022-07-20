import { useAccount, useAssets, useAuth } from '@/hooks';
import { api } from '@/lib/axios';
import generateAssetPurchaseSchema from '@/schemas/purchaseAsset';
import { Asset } from '@/types/shared';
import { AssetOverview, Input } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

type AssetPurchaseFormData = {
  amount: number;
};

type AssetPurchaseModalProps = {
  desiredAsset: string;
};

export default function AssetPurchaseModal({ desiredAsset }: AssetPurchaseModalProps) {
  const { clientId } = useAuth();
  const { mutate } = useSWRConfig();
  const { balance } = useAccount();
  const { handleAssetPurchase } = useAssets();
  const [asset, setAsset] = useState<Asset | null>(null);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AssetPurchaseFormData>({
    mode: 'onChange',
    resolver: yupResolver(
      generateAssetPurchaseSchema(balance, Number(asset?.amount), Number(asset?.unitPrice)),
    ),
    defaultValues: {
      amount: 0,
    },
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`api/ativos/${desiredAsset}`);
      setAsset(data);
    })();
  }, [desiredAsset]);

  const handleSubmitPurchase: SubmitHandler<AssetPurchaseFormData> = async (data) => {
    await handleAssetPurchase({
      purchaseQuantity: data.amount,
      assetId: desiredAsset,
    });
    mutate('/api/ativos');
    mutate(`/api/investimentos/${clientId}`);
    mutate(`/api/conta/${clientId}`);
    resetField('amount');

    // i will fix that
    const modal = document.getElementById('asset-purchase-modal') as any;
    modal.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="asset-purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="asset-purchase-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-4 text-lg font-bold">Comprar ação</h3>
          <form
            onSubmit={handleSubmit((data) => handleSubmitPurchase(data as AssetPurchaseFormData))}
          >
            {asset && <AssetOverview asset={asset} />}
            <div className="py-4">
              <Input
                {...register('amount')}
                name="amount"
                type="number"
                label="Quantidade"
                step="1"
                error={errors.amount}
              />
            </div>
            <div className="mt-0 modal-action">
              <button
                type="submit"
                className={`btn btn-primary ${isSubmitting && 'loading'}`}
                disabled={!isValid}
              >
                Confirmar
                <label htmlFor="asset-purchase-modal" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
