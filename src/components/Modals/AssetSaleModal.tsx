import { useAssets, useAuth } from '@/hooks';
import generateAssetSaleSchema from '@/schemas/assetSale';
import { Asset } from '@/types/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import AssetOverview from '../AssetOverview';
import Input from '../Form/Input';

type AssetSaleFormData = {
  amount: number;
};

type AssetSaleModalProps = {
  desiredAsset: string;
};

export default function AssetSaleModal({ desiredAsset }: AssetSaleModalProps) {
  const { clientId } = useAuth();
  const { mutate } = useSWRConfig();
  const { investments, handleAssetSale } = useAssets();
  const [asset, setAsset] = useState<Asset | null>(null);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AssetSaleFormData>({
    mode: 'onChange',
    resolver: yupResolver(generateAssetSaleSchema(Number(asset?.amount))),
    defaultValues: {
      amount: 0,
    },
  });

  useEffect(() => {
    resetField('amount');
    const assetToSale = investments.find(({ assetId }) => assetId === desiredAsset) as Asset;
    setAsset(assetToSale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredAsset, investments]);

  const handleSubmitSale: SubmitHandler<AssetSaleFormData> = async (data) => {
    await handleAssetSale({ saleQuantity: data.amount, assetId: desiredAsset });
    mutate('/api/ativos');
    mutate(`/api/investimentos/${clientId}`);
    mutate(`/api/conta/${clientId}`);
    resetField('amount');

    // i will fix that
    const modal = document.getElementById('asset-sale-modal') as any;
    modal.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="asset-sale-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="asset-sale-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-4 text-lg font-bold">Vender ação</h3>
          <form onSubmit={handleSubmit((data) => handleSubmitSale(data as AssetSaleFormData))}>
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
                <label htmlFor="asset-sale-modal" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
