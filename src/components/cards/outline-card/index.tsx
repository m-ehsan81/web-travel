import { Icon } from '@iconify/react';
import { OutlineCardProps } from './type';

function OutlineCard({ children, label }: OutlineCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-solid border-[#6C757D] px-10 py-6">
      <div className="flex gap-2">
        <Icon icon="lets-icons:bubble" color="#FC5C04" fontSize={32} />
        <h3 className="text-[20px] font-bold">{label}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default OutlineCard;
