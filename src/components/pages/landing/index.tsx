import TourCard from '@/components/cards/tour-card';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import TourSvg from '@/components/svg-component/tour-svg';
import TravelSvg from '@/components/svg-component/travel-svg';

function Landing() {
  return (
    <div className="px-8">
      <div>
        <h3 className="mb-[46px] text-center text-[32px] font-bold text-[#142D4D]">
          پیشنهاد های نوا سفر
        </h3>
        <div className="flex justify-center gap-8">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
        <Link
          href="/"
          className="mt-8 flex items-center justify-center gap-2 text-[#142D4D]"
        >
          <span className="text-[18px] font-medium">مشاهده همه</span>
          <Icon icon="icons8:left-round" fontSize="24px" color="#142D4D" />
        </Link>
      </div>

      <div className="mt-20 flex flex-col gap-20 px-[65px] text-[#142D4D]">
        <div className="flex items-end justify-between">
          <div>
            <h4 className="text-[32px] font-bold">گردشگری در ایران</h4>
            <p className="mb-10 mt-3 text-[24px] font-bold text-[#6C757D]">
              مقصد بعدیتو از اینجا انتخاب کن
            </p>
            <TourSvg />
          </div>
          <p className="mb-[27px] w-[654px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex w-[503px] flex-col items-center">
            <p>
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
              گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>

            <Link
              href="/"
              className="mt-10 flex items-center gap-10 rounded-[40px] bg-[#FC5C04] p-4 text-white"
            >
              <span className="text-[20px] font-normal">رزور بلیط</span>
              <Icon icon="icons8:left-round" fontSize="24px" />
            </Link>
          </div>
          <div>
            <h4 className="text-[32px] font-bold">بلیط سفر</h4>
            <p className="mb-10 mt-3 text-[24px] font-bold text-[#6C757D]">
              با نوا سفر راحت سفر کن
            </p>
            <TravelSvg />
          </div>
        </div>
      </div>

      {/* <SocialIcons /> */}
    </div>
  );
}

export default Landing;
