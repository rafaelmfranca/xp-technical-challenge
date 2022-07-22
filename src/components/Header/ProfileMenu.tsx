import { useAuth } from '@/hooks';
import { SignOut } from 'phosphor-react';

export default function ProfileMenu() {
  const { handleLogout } = useAuth();

  return (
    <ul
      tabIndex={0}
      className="p-3 mt-3 space-y-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a onClick={handleLogout}>
          <SignOut size={24} />
          <span className="font-medium">Sair</span>
        </a>
      </li>
    </ul>
  );
}
