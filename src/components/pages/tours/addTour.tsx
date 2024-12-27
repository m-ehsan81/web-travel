import OutlineCard from '@/components/cards/outline-card';
import CustomCheckBox from '@/components/customs/custom-checkbox';
import CustomInput from '@/components/customs/custom-input';
import CustomTextArea from '@/components/customs/custom-textarea';

function AddTour() {
  return (
    <div className="flex grow flex-col gap-8">
      <OutlineCard label="اطلاعات تور">
        <div className="grid grid-cols-3 gap-4">
          <CustomInput placeholder="نام آژانس" />
          <CustomInput placeholder="نام تور" className="col-span-2" />
          <CustomInput placeholder="مبدا" />
          <CustomInput placeholder="تاریخ رفت" />
          <CustomInput placeholder="ساعت رفت" />
          <CustomInput placeholder="مقصد" />
          <CustomInput placeholder="تاریخ برگشت" />
          <CustomInput placeholder="ساعت برگشت" />
        </div>
      </OutlineCard>

      <OutlineCard label="اطلاعات تور">
        <div className="flex flex-col gap-8">
          <div className="flex gap-10">
            <CustomCheckBox label="شناسنامه" />
            <CustomCheckBox label="كارت ملی" />
            <CustomCheckBox label="بيمه" />
            <CustomCheckBox label="مدارك محرميت" />
            <CustomCheckBox label="پاسپورت" />
            <CustomCheckBox label="ويزا مقصد" />
          </div>

          <CustomTextArea label="توضیحات" rows={4} />
        </div>
      </OutlineCard>

      <OutlineCard label="اطلاعات تور">
        <div className="grid grid-cols-3 gap-4">
          <CustomInput placeholder="قيمت" />
          <CustomInput placeholder="تلفن - خط رزرو" />
          <CustomInput placeholder="تلفن - خط پشتيبانی 1" />
          <CustomInput placeholder="تلفن - خط پشتيبانی 2" />
        </div>
      </OutlineCard>
    </div>
  );
}

export default AddTour;
