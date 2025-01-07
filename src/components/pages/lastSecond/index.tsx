'use client';
import CustomInput from '@/components/customs/custom-input';
import { Select } from 'flowbite-react';
import { Fragment } from 'react';
import { TicketCard } from './ticketCrad';

export const LasetSecond = () => {
  return (
    <div className="mt-[162px] flex flex-nowrap gap-4 px-10">
      <div className="flex w-[564px] flex-col gap-8">
        {/* <div className="flex gap-2.5 rounded-3xl border border-[#6C757D] p-10">
          <LastSecondCalendar />
          <LastSecondCalendar />
          <LastSecondCalendar />
          <LastSecondCalendar isSelected />
          <LastSecondCalendar />
          <LastSecondCalendar />
          <LastSecondCalendar />
        </div> */}
        <div className="flex flex-col gap-2">
          <label className="text-[20px] font-bold text-[#333]">قیمت:</label>
          <div className="flex gap-4">
            <CustomInput placeholder="حداکثر" />
            <CustomInput placeholder="حداقل" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[20px] font-bold text-[#333]">
            شماره پرواز:
          </label>
          <CustomInput placeholder="حداکثر" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[20px] font-bold text-[#333]">
            ساعت حرکت:
          </label>
          <Select>
            {Array.from(Array(24)).map((__, index) => (
              <Fragment key={index}>
                {Array.from(Array(60)).map((_, i) => (
                  <option key={i}>
                    {index}:{i < 10 ? `0${i}` : i}
                  </option>
                ))}
              </Fragment>
            ))}
          </Select>
        </div>
      </div>
      <div className="w-full flex-col gap-4">
        <TicketCard />
      </div>
    </div>
  );
};
