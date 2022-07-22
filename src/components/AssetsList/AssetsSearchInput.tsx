import { MagnifyingGlass } from 'phosphor-react';

type AssetsSearchInputProps = {
  assetSearch: string;
  handleAssetSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AssetsSearchInput({
  assetSearch,
  handleAssetSearchChange,
}: AssetsSearchInputProps) {
  return (
    <div className="max-w-xs mx-auto mb-4">
      <MagnifyingGlass
        size={18}
        weight="bold"
        role="img"
        className="absolute translate-x-3.5 translate-y-3.5 pointer-events-none text-primary"
      />
      <input
        type="text"
        name="assetSearch"
        value={assetSearch}
        placeholder="Procure pelo código do ativo"
        className="w-full pl-10 input input-bordered"
        onChange={handleAssetSearchChange}
      />
    </div>
  );
}
