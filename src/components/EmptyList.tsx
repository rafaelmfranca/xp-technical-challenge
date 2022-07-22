import { ArrowRight, WarningCircle } from 'phosphor-react';

type EmptyListProps = {
  message: string;
  handleTabChange?: (index: number) => void;
};

export default function EmptyList({ message, handleTabChange }: EmptyListProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-auto gap-4 mt-32">
      <div className="p-2 rounded-full bg-base-300">
        <WarningCircle size={32} role="img" aria-label="Atenção" />
      </div>
      <p className="p-2 font-medium text-center">{message}</p>
      {handleTabChange && (
        <button
          className="gap-2 btn btn-outline btn-primary btn-sm"
          onClick={() => handleTabChange(1)}
        >
          <ArrowRight size={20} role="img" />
          Veja as opções de ativos!
        </button>
      )}
    </div>
  );
}
