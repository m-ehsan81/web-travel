import { useState } from 'react';

import OutlineCard from '@/components/cards/outline-card';
import CustomInput from '@/components/customs/custom-input';
import EditButton from './edit-button';
import { useFormik } from 'formik';
import { useSetUserInfoMutation } from '@/lib/features/user-info/user-api-slice';

function PersonalInformation() {
  const [isEdit, setIsEdit] = useState(false);

  const [fetchSetUserInfo, fetchSetUserInfoData] = useSetUserInfoMutation();

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      family: '',
      birthDate: '',
      nationalId: '',
    },
    onSubmit: async (values) => {
      const res = await fetchSetUserInfo(values).unwrap();

      if (res.isSuccess) {
        setIsEdit(false);
      }
    },
  });

  return (
    <OutlineCard label="اطلاعات شخصی">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              placeholder="نام"
              {...getFieldProps('name')}
              disabled={!isEdit}
            />
            <CustomInput
              placeholder="نام خانوادگی"
              {...getFieldProps('family')}
              disabled={!isEdit}
            />
            <CustomInput
              placeholder="کد ملی"
              {...getFieldProps('nationalId')}
              disabled={!isEdit}
            />
            <CustomInput
              placeholder="تاریخ تولد"
              {...getFieldProps('birthDate')}
              disabled={!isEdit}
            />
          </div>

          <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>
      </form>
    </OutlineCard>
  );
}

export default PersonalInformation;
