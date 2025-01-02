import { Button } from 'flowbite-react';
import Image from 'next/image';
import { AirplaneIcon } from './airplane';
import { BagIcon } from './bagIcon';

export const TicketCard = () => {
  return (
    <div className="border-[rgba(108, 117, 125, 0.40)] flex w-full justify-between rounded-[22px] border py-4 pl-[22px] pr-[33px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)]">
      <Image width={40} height={40} src="/svg/24-support.svg" alt="icon" />
      <div className="flex items-center gap-1">
        <div className="flex flex-col">
          <p className="text-[16px] font-medium text-[#808080]">کیش</p>
          <p className="text-[16px] font-medium text-[#808080]">18:30</p>
        </div>
        <div className="h-0 w-[120px] border-b border-[#808080]" />
        <AirplaneIcon />
        <div>
          <p className="text-[16px] font-medium text-[#808080]">کیش</p>
          <p className="text-[16px] font-medium text-[#808080]">18:30</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 pr-3">
        <p className="flex items-center rounded-3xl bg-[#FFCC0066]/40 px-2 py-1 text-[16px] font-medium text-[#FC5C04]">
          8 ساعت تا پرواز
        </p>
        <div className="mr-auto flex flex-col items-end gap-1">
          <p className="w-fit rounded-3xl bg-[#CBCBCB] px-2 py-1 text-center text-[12px]">
            اکونومی
          </p>
          <p className="flex items-center gap-0.5 rounded-3xl bg-[#CBCBCB] px-2 py-1 text-center text-[12px]">
            <BagIcon />
            20کیلوگرم
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 border-r pr-3">
        <p className="text-[28px] text-[#0D7066]">16,500,000 ريال</p>
        <div className="flex flex-col gap-1">
          <Button className="bg-[#FC5C04] hover:!bg-red-700" fullSized>
            رزرو پرواز
          </Button>
          <p className="text-[#3851C8]">قوانین و مقررات</p>
        </div>
      </div>
    </div>
  );
};
