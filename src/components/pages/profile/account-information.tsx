import OutlineCard from '@/components/cards/outline-card';
import CustomInput from '@/components/customs/custom-input';
import EditButton from './edit-button';
import { useState } from 'react';

function AccountInformation() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <OutlineCard label="اطلاعات حساب کاربری">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput placeholder="ایمیل" />
          <CustomInput placeholder="شماره تلفن" />
        </div>

        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </OutlineCard>
  );
}

export default AccountInformation;
