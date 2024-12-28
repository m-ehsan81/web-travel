import OutlineCard from '@/components/cards/outline-card';
import CustomCheckBox from '@/components/customs/custom-checkbox';
import CustomInput from '@/components/customs/custom-input';

function AddTicket() {
  return (
    <div className="flex grow flex-col gap-8">
      <OutlineCard label="اطلاعات بلیط">
        <div className="grid grid-cols-3 gap-4">
          <CustomInput placeholder="نام آژانس" />
          <CustomInput placeholder="نام شرکت" />
          <CustomCheckBox label="رفت و برگشت" />
          <CustomInput placeholder="مبدا" />
          <CustomInput placeholder="تاریخ رفت" />
          <CustomInput placeholder="ساعت رفت" />
          <CustomInput placeholder="مقصد" />
          <CustomInput placeholder="تاریخ برگشت" />
          <CustomInput placeholder="ساعت برگشت" />
          <CustomInput placeholder="ظرفیت" />
          <CustomInput placeholder="نوع پرواز" />
          <CustomInput placeholder="قیمت بلیط" />
        </div>
      </OutlineCard>
    </div>
  );
}

export default AddTicket;
