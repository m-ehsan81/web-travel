'use client';
import React, { useState } from 'react';
import { layoutData } from './constant';
import NovaLogo from '../nova-logo';
import { Icon } from '@iconify/react';
import { NavbarItemProps } from './type';
import { useRouter } from 'next/navigation';
import Auth from '../pages/auth';

function NavbarItem(props: NavbarItemProps) {
  const router = useRouter();
  const { icon, title, url, onClickItem } = props;

  const clickHandler = () => {
    router.push(url);
  };

  return (
    <li>
      <button
        className="flex items-center gap-1"
        onClick={onClickItem ? onClickItem : clickHandler}
      >
        <Icon icon={icon} fontSize={24} />
        <span className="text-xl">{title}</span>
      </button>
    </li>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  const loginHandler = () => {
    setShowModal(true);
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-[#142D4D] px-10 py-5 text-white">
        <NovaLogo />

        <ul className="flex items-center gap-10">
          {layoutData.map((item, index) => (
            <NavbarItem
              key={index}
              {...item}
              onClickItem={item.url === '/login' ? loginHandler : undefined}
            />
          ))}
        </ul>
      </nav>

      <Auth showModal={showModal} setShowModal={setShowModal} />

      <div>{children}</div>
    </div>
  );
}

export default Layout;
