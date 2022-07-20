type TabSwitcherProps = {
  tabIndex: number;
  handleTabChange: (index: number) => void;
};

export default function TabSwitcher({
  tabIndex,
  handleTabChange,
}: TabSwitcherProps) {
  return (
    <div className="flex justify-center w-full p-4 sm:p-8">
      <div className="font-medium border tabs tabs-boxed bg-base-100 border-base-300">
        <button
          className={`tab ${tabIndex === 0 && 'tab-active'}`}
          onClick={() => handleTabChange(0)}
        >
          Minhas ações
        </button>
        <button
          className={`tab ${tabIndex === 1 && 'tab-active'}`}
          onClick={() => handleTabChange(1)}
        >
          Disponíveis
        </button>
      </div>
    </div>
  );
}
