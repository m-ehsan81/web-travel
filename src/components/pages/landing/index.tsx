import TourCard from '@/components/cards/tour-card';

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
      </div>
    </div>
  );
}

export default Landing;
