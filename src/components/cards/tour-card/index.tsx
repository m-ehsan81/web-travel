import { Icon } from '@iconify/react';
import Image from 'next/image';

function TourCard() {
  return (
    <div className="relative flex h-[200px] w-[320px] overflow-hidden rounded-lg">
      <Image
        alt="tour card"
        src="/assets/Nasir-al-Mulk-Mosque-Cultural-Tour-to-Iran-Explore-Persia-Through-Its-Historical-Cpitals-2 1.png"
        fill
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end px-4 pb-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[20px] font-bold">دبی</h3>
            <p className="text-[13px">تور مسافرتی برای دبی</p>
          </div>

          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Icon icon="jam:shopping-cart" fontSize="24px" color="#000" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
