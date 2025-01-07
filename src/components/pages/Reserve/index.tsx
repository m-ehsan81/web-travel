'use client';
import Image from 'next/image';
import { BagIcon } from '../lastSecond/bagIcon';
import { Button, Checkbox, Label } from 'flowbite-react';
import { AirplaneIcon } from '../lastSecond/airplane';
import { useRouter } from 'next/navigation';
import CustomInput from '@/components/customs/custom-input';
import { useState } from 'react';
import { Icon } from './icon';

export const Reserve = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    latinName: '',
    latinFamilyName: '',
    birthDate: '',
    nationalId: '',
    sex: '',
  });

  const handlSubmit = () => {};
  return (
    <div className="flex flex-col gap-6">
      <div className="px-[40px] py-[55px]">
        <div className="border-[rgba(108, 117, 125, 0.40)] flex w-full justify-between rounded-[22px] border py-4 pl-[22px] pr-[33px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Icon />
              <p className="text-[20px] font-bold">مشخصات بلیط</p>
            </div>
            <div className="flex flex-col">
              <Image
                width={40}
                height={40}
                src="/airline.png"
                alt="icon"
                className="rounded-full"
              />
              <p>Kish Air</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-1">
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
          <div className="mt-10 flex flex-col items-center justify-center gap-6 pr-3">
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
            <div className="flex flex-col gap-1">
              <Button
                className="bg-[#FC5C04] hover:!bg-red-700"
                fullSized
                onClick={() => router.back()}
              >
                تغییر جستوجو
              </Button>
            </div>
            <p className="text-[28px] text-[#0D7066]">16,500,000 ريال</p>
          </div>
        </div>
      </div>
      <div className="mx-[40px] flex rounded-[16px] border border-[rgba(108,117,125,0.20)] py-4 pl-[22px] pr-[33px]">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[20px] font-bold">مشخصات مسافران</p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div>
              <CustomInput
                placeholder="نام لاتين"
                onChange={(e) =>
                  setUser({
                    ...user,
                    latinName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <CustomInput
                placeholder="نام خانوادگی لاتين"
                onChange={(e) =>
                  setUser({
                    ...user,
                    latinFamilyName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <CustomInput
                placeholder="جنسيت"
                onChange={(e) =>
                  setUser({
                    ...user,
                    sex: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <CustomInput
                placeholder="تاریخ تولد"
                onChange={(e) =>
                  setUser({
                    ...user,
                    birthDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <CustomInput
                placeholder="کد ملی"
                onChange={(e) =>
                  setUser({
                    ...user,
                    nationalId: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[40px] flex rounded-[16px] border border-[rgba(108,117,125,0.20)] py-4 pl-[22px] pr-[33px]">
        <div className="flex w-full flex-col gap-5">
          <div>
            <p className="text-[20px] font-bold">تاييد نهايی</p>
          </div>
          <div className="flex gap-2">
            <Checkbox />
            <Label>ارسال بليط به ايميل و همراه من</Label>
          </div>
          <div className="w-full">
            <Button fullSized onClick={handlSubmit}>
              تایید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
