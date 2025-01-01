'use client';
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

function SearchInput({ className, icon, ...rest }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
        {icon}
      </div>
      <input
        className={`${className} block w-full rounded-lg border-none bg-white p-2.5 ps-10 text-sm text-gray-900 focus:outline-none`}
        {...rest}
      />
    </div>
  );
}

function SeachLanding() {
  const [travelType, setTravelType] = useState<'unilateral' | 'sweep'>(
    'unilateral',
  );
  return (
    <div
      className="relative z-10 m-auto mt-[-30px] flex w-[1178px] flex-col gap-6 rounded-[8px] bg-white p-6"
      style={{
        boxShadow:
          '-2px 0px 4px 0px rgba(0, 0, 0, 0.25), 2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <select className="block w-fit border-none p-0 text-[#FC5C04] focus:border-none focus:outline-none">
            <option value="airplane">هواپیما</option>
            <option value="train">قطار</option>
            <option value="buss">اتوبوس</option>
          </select>

          <div className="flex gap-6">
            <span
              aria-selected={travelType === 'unilateral'}
              className="cursor-pointer pb-2 aria-selected:border-b-2 aria-selected:border-[#FC5C04]"
              onClick={() => setTravelType('unilateral')}
            >
              یک طرفه
            </span>
            <span
              aria-selected={travelType === 'sweep'}
              className="cursor-pointer pb-2 aria-selected:border-b-2 aria-selected:border-[#FC5C04]"
              onClick={() => setTravelType('sweep')}
            >
              رفت و برگشت
            </span>
          </div>
        </div>
        <button className="rounded-3xl bg-[#FC5C04] px-[52px] py-2 text-white">
          جست و جو
        </button>
      </div>
      <div className="flex items-center overflow-hidden rounded-2xl border border-[#6C757D]">
        <SearchInput
          icon={<Icon icon="ant-design:swap-outlined" fontSize={16} />}
          placeholder="مبدا"
        />
        <SearchInput
          icon={<Icon icon="ant-design:swap-outlined" fontSize={16} />}
          placeholder="مقصد"
        />

        <div className="h-6 border-r border-black" />

        <SearchInput
          icon={<Icon icon="stash:data-date-light" fontSize={16} />}
          placeholder="مبدا"
        />
        <SearchInput
          icon={<Icon icon="stash:data-date-light" fontSize={16} />}
          placeholder="مقصد"
        />

        <div className="h-6 border-r border-black" />

        <SearchInput
          icon={<Icon icon="hugeicons:user-group" fontSize={16} />}
          placeholder="مسافران"
        />
      </div>
    </div>
  );
}

export default SeachLanding;
