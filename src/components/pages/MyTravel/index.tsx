import { Card } from './Card';

export const MyTravel = () => {
  return (
    <div className="roudned-[16px] border border-[#6C757D] px-[16px] py-[24px]">
      <Card
        type="train"
        isCompleted
        distance="تهران"
        origin="تگزاس"
        cost="7,900,000"
        date="فردا شب"
      />
    </div>
  );
};
