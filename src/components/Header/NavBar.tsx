import { Avatar, NavMenu, ProfileMenu, ThemeSwitcher } from '@components';
import Link from 'next/link';
import { List } from 'phosphor-react';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <List size={24} />
          </label>
          <NavMenu />
        </div>
      </div>

      <div className="gap-2 navbar-center">
        <Link href="/ativos">
          <strong className="text-2xl cursor-pointer">
            XP Inc<span className="text-2xl text-primary">.</span>
          </strong>
        </Link>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <ThemeSwitcher />
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
            <Avatar />
          </label>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
