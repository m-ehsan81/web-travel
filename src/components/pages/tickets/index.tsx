import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

function Tickets() {
  return (
    <div className="w-full rounded-2xl border border-[##333333]">
      <div className="flex items-center justify-between p-6">
        <div>
          <div className="flex items-center gap-4">
            <Image
              alt="ticket logo"
              src="/svg/ticket.svg"
              width={74}
              height={74}
            />
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-bold">كيش اير</span>
              <span className="text-[18px] font-bold">ايرلاين: ماهان</span>
            </div>
          </div>

          <p className="mb-4 mt-6">توضيحات تكميلی:</p>

          <div className="flex items-center gap-6">
            <p>ظرفيت: 320 نفر</p>
            <p>پرواز برگشت: دارد</p>
          </div>

          <p className="mt-2">نوع پرواز: داخلی</p>
        </div>

        <div className="flex h-full flex-col justify-between gap-20">
          <div className="flex gap-3">
            <div>
              <p>کیش</p>
              <span>18:20</span>
            </div>

            <div className="flex items-center">
              <div className="h-[2px] w-[120px] bg-[#142D4D]" />
              <Icon
                icon="famicons:airplane-outline"
                className="rotate-180"
                color="#FC5C04"
                fontSize={24}
              />
            </div>

            <div>
              <p>تهران</p>
              <span>18:20</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <p>کیش</p>
              <span>18:20</span>
            </div>

            <div className="flex items-center">
              <div className="h-[2px] w-[120px] bg-[#142D4D]" />
              <Icon
                icon="famicons:airplane-outline"
                className="rotate-180"
                color="#FC5C04"
                fontSize={24}
              />
            </div>

            <div>
              <p>تهران</p>
              <span>18:20</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <span>قيمت:</span>
            <span className="text-[20px] font-bold text-[#FC5C04]">
              12,000,000 ريال
            </span>
          </div>

          <p>1403/09/25</p>

          <p className="mt-[70px]">تاريخ برگشت: 1403/09/26</p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="rounded-lg bg-[#3851C8] p-2 text-white">
            <Icon icon="basil:edit-outline" fontSize={24} />
          </button>

          <button className="rounded-lg bg-[#3851C8] p-2 text-white">
            <Icon icon="jam:task-list" fontSize={24} />
          </button>

          <button className="rounded-lg bg-[#3851C8] p-2 text-white">
            <Icon icon="mdi:percent-box-outline" fontSize={24} />
          </button>

          <button className="rounded-lg bg-[#D92D20] p-2 text-white">
            <Icon icon="fluent:delete-24-regular" fontSize={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
