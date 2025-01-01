'use client';
import React, { useState } from 'react';
import { footerItems, layoutData } from './constant';
import NovaLogo from '../nova-logo';
import { Icon } from '@iconify/react';
import { NavbarItemProps } from './type';
import { useRouter } from 'next/navigation';
import Auth from '../pages/auth';
import Link from 'next/link';

function NavbarItem(props: NavbarItemProps) {
  const router = useRouter();
  const { icon, title, url } = props;

  const clickHandler = () => {
    router.push(url);
  };

  return (
    <li>
      <button className="flex items-center gap-1" onClick={clickHandler}>
        <Icon icon={icon} fontSize={24} />
        <span className="text-[18px]">{title}</span>
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
      <nav className="flex items-center gap-6 bg-white px-10 py-5 text-white shadow-md">
        <Link href="/">
          <NovaLogo />
        </Link>

        <ul className="flex flex-grow items-center gap-10 rounded-[32px] bg-[#142D4D] px-10 py-5">
          <button className="flex flex-grow items-center gap-1">
            <Icon icon="lineicons:search-1" fontSize={24} />
            <span className="text-[18px]">جست و جو</span>
          </button>
          {layoutData.map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </ul>

        <button
          className="rounded-[32px] bg-[#142D4D] px-8 py-5 text-[18px]"
          onClick={loginHandler}
        >
          ورود / ثبت نام
        </button>
      </nav>

      <Auth showModal={showModal} setShowModal={setShowModal} />

      <div>{children}</div>

      <div className="m-10 mt-[80px] w-[calc(100%-80px)] rounded-2xl bg-[#142D4D] px-10 py-6">
        <div className="flex gap-20 text-white">
          {footerItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <p className="text-[28px] font-medium">{item.title}</p>

              <div className="flex flex-col gap-1">
                {item.subMenus.map((sub) => (
                  <Link
                    href="#"
                    key={sub.id}
                    className="text-[18px] font-medium"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
