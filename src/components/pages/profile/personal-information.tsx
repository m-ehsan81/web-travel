import { useState } from 'react';

import OutlineCard from '@/components/cards/outline-card';
import CustomInput from '@/components/customs/custom-input';
import EditButton from './edit-button';

function PersonalInformation() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <OutlineCard label="اطلاعات شخصی">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput placeholder="نام" />
          <CustomInput placeholder="نام خانوادگی" />
          <CustomInput placeholder="کد ملی" />
          <CustomInput placeholder="تاریخ تولد" />
        </div>

        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </OutlineCard>
  );
}

export default PersonalInformation;
