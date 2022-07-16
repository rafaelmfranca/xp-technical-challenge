import { List } from 'phosphor-react';
import Avatar from './Avatar';
import NavMenu from './NavMenu';
import ThemeSwitcher from './ThemeSwitcher';

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

      <div className="navbar-center">
        <strong className="text-2xl">XP.Inc</strong>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <ThemeSwitcher />
        </button>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <Avatar />
        </label>
      </div>
    </div>
  );
}
