import { AlignBottom, Cardholder } from 'phosphor-react';
import NavMenuItem from './NavMenuItem';

export default function NavMenu() {
  return (
    <ul className="p-3 mt-3 space-y-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <NavMenuItem
        href="/ativos"
        title="Ativos"
        icon={<AlignBottom size={24} />}
      />
      <NavMenuItem
        href="/conta"
        title="Conta"
        icon={<Cardholder size={24} />}
      />
    </ul>
  );
}
