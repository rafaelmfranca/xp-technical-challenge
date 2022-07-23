import { AssetsList, Header, TabSwitcher } from '@components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Ativos() {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('session')) {
      router.push('/');
    }
  }, [router]);

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
