'use client';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { ArrowLeft } from './ArrowLeft';
import { LeftArrow } from './leftArrow';
import { Tooltip } from 'flowbite-react';

enum ETravelType {
  'train' = 'قطار',
  'airplane' = 'پرواز',
  'bus' = 'اتوبوس',
}

interface ICard {
  type: 'train' | 'airplane' | 'bus';
  isCompleted: boolean;
  distance: string;
  origin: string;
  cost: number | string;
  date: any;
}

export const Card: FC<ICard> = ({
  type,
  isCompleted,
  distance,
  origin,
  cost,
  date,
}) => {
  const [show, setShow] = useState(false);
  const Icon = dynamic(() => import(`./${type}`), {
    ssr: false,
  });

  return (
    <div className="flex justify-between rounded-[8px] border border-[#AEAEAE] p-[12px]">
      <div className="flex flex-col gap-[18px]">
        <div className="flex items-center gap-[8px]">
          <div className="size-[32px]">
            <Icon />
          </div>
          <p className="text-[18px] font-medium">
            {ETravelType[type as keyof typeof ETravelType]}
          </p>
          <div
            className={clsx('rounded-[16px] px-[8px]', {
              'bg-[#12B76A33]': isCompleted,
              'bg-[#C2000033]': !isCompleted,
            })}
          >
            <p className="text-[14px] font-medium text-[#0D7066]">
              {isCompleted ? 'نهایی شده' : 'استرداد شده'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <p className="text-[14px] font-medium">{distance}</p>
          <ArrowLeft />
          <p className="text-[14px] font-medium">{origin}</p>
          <p className="mr-[12px] text-[14px] font-medium text-[#808080]">
            {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[18px]">
        <Tooltip content="امکان استرداد وجود ندارد">
          <p
            className="flex cursor-pointer items-center text-[#FC5C04]"
            onClick={() => setShow(!show)}
          >
            <span>استرداد وجه</span>
            <LeftArrow />
          </p>
        </Tooltip>
        <div className="flex gap-[8px]">
          <p className="text-[14px] font-medium text-[#808080]">مبلغ پرداختی</p>
          <p>{cost}ریال</p>
        </div>
      </div>
    </div>
  );
};
