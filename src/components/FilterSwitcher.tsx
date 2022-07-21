type FilterSwitcherProps = {
  tabIndex: number;
  handleTabChange: (index: number) => void;
};

export default function FilterSwitcher({ tabIndex, handleTabChange }: FilterSwitcherProps) {
  return (
    <div className="flex justify-center w-full pb-4">
      <div className="font-medium border tabs tabs-boxed bg-base-100 border-base-300">
        <button
          className={`tab ${tabIndex === 0 && 'tab-active'}`}
          onClick={() => handleTabChange(0)}
        >
          Todas
        </button>
        <button
          className={`tab ${tabIndex === 1 && 'tab-active'}`}
          onClick={() => handleTabChange(1)}
        >
          Depósitos
        </button>
        <button
          className={`tab ${tabIndex === 2 && 'tab-active'}`}
          onClick={() => handleTabChange(2)}
        >
          Retiradas
        </button>
      </div>
    </div>
  );
}
