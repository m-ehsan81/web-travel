import { useState } from 'react';

import OutlineCard from '@/components/cards/outline-card';
import CustomInput from '@/components/customs/custom-input';
import EditButton from './edit-button';

function BankAccountInformation() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <OutlineCard label="اطلاعات حساب بانکی">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput placeholder="شماره شبا" />
          <CustomInput placeholder="شماره حساب" />
          <CustomInput placeholder="شماره کارت" />
        </div>

        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </OutlineCard>
  );
}

export default BankAccountInformation;
