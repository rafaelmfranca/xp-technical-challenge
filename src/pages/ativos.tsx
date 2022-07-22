import { AssetsList, Header, TabSwitcher } from '@components';
import { useState } from 'react';

export default function Ativos() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <Header />
      <TabSwitcher handleTabChange={handleTabChange} tabIndex={tabIndex} />
      <AssetsList handleTabChange={handleTabChange} tabIndex={tabIndex} />
    </>
  );
}
