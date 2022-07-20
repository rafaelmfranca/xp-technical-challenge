import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type NavMenuItemProps = {
  href: string;
  title: string;
  icon: ReactNode;
};

export default function NavMenuItem({ href, title, icon }: NavMenuItemProps) {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a className={router.asPath === href ? 'bg-primary text-primary-content' : ''}>
          {icon}
          <span className="font-medium">{title}</span>
        </a>
      </Link>
    </li>
  );
}
