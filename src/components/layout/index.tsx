import Link from 'next/link';
import React from 'react';
import { layoutData } from './constant';
import NovaLogo from '../nova-logo';
import { Icon } from '@iconify/react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex items-center justify-between bg-[#142D4D] px-10 py-5 text-white">
        <NovaLogo />

        <ul className="flex items-center gap-10">
          {layoutData.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className="flex items-center gap-1">
                <Icon icon={item.icon} fontSize={24} />
                <span className="text-xl">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
