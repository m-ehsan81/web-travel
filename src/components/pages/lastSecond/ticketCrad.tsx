import { Button } from 'flowbite-react';
import Image from 'next/image';
import { AirplaneIcon } from './airplane';
import { BagIcon } from './bagIcon';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const TicketCard = () => {
  const { push } = useRouter();
  const [x, setX] = useState<any>([]);
  useEffect(() => {
    axios
      .get('https://smh1381.bsite.net/api/Site/Tickets/GetAllTickets')
      .then((res) => setX(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      {x.data?.data?.Airplane.map((item: any, index: number) => (
        <div
          key={index}
          className="border-[rgba(108, 117, 125, 0.40)] flex w-full justify-between rounded-[22px] border py-4 pl-[22px] pr-[33px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)]"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              width={40}
              height={40}
              src="/svg/footer-icon-5.svg"
              alt="icon"
            />
            {item.agencyName}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex flex-col">
              <p className="text-[16px] font-medium text-[#808080]">
                {item.origin}
              </p>
              <p className="text-[16px] font-medium text-[#808080]">
                {item.departureTime}
              </p>
            </div>
            <div className="h-0 w-[120px] border-b border-[#808080]" />
            <AirplaneIcon />
            <div>
              <p className="text-[16px] font-medium text-[#808080]">
                {item.destination}
              </p>
              <p className="text-[16px] font-medium text-[#808080]">
                {item.returnTime}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 pr-3">
            <p className="flex items-center rounded-3xl px-2 py-1 text-[16px] font-medium text-[#fff]">
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
            <p className="text-[28px] text-[#0D7066]">
              {Number(item.price).toLocaleString()} ريال
            </p>
            <div className="flex flex-col gap-1">
              <Button
                className="bg-[#FC5C04] hover:!bg-red-700"
                fullSized
                onClick={() => push(`/reserve/${item.ticketId}/${item.typeId}`)}
              >
                رزرو پرواز
              </Button>
              <p className="text-[#3851C8]">قوانین و مقررات</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
