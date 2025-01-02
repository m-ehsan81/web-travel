import clsx from 'clsx';
import { FC } from 'react';

export const LastSecondCalendar: FC<{ isSelected?: boolean }> = ({
  isSelected,
}) => (
  <div
    className={clsx(
      'flex w-16 flex-col items-center justify-center gap-2 rounded-[40px] py-9',
      {
        'bg-[#FC5C04]': isSelected,
        'bg-[#32A6D5]': !isSelected,
      },
    )}
  >
    <span className="text-[14px] text-white">شنبه</span>
    <span className="text-[26px] text-white">07</span>
    <span className="text-[12px] leading-5 text-white">13,400,000</span>
  </div>
);
