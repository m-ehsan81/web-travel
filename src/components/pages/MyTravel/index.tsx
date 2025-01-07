import { Card } from './Card';

export const MyTravel = () => {
  return (
    <div className="w-full px-[16px] py-[24px]">
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
