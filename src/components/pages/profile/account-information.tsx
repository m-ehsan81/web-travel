import OutlineCard from '@/components/cards/outline-card';
import CustomInput from '@/components/customs/custom-input';
import EditButton from './edit-button';
import { useState } from 'react';
import {
  useSetUserInfoMutation,
  useUserInfoQuery,
} from '@/lib/features/user-info/user-api-slice';
import { useFormik } from 'formik';

function AccountInformation() {
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useUserInfoQuery();

  const [fetchSetUserInfo, fetchSetUserInfoData] = useSetUserInfoMutation();

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      phoneNo: data?.data?.phoneNo || '',
      email: data?.data?.email || '',
    },

    onSubmit: async (values) => {
      const res = await fetchSetUserInfo(values).unwrap();

      if (res.isSuccess) {
        setIsEdit(false);
      }
    },

    enableReinitialize: true,
  });

  return (
    <OutlineCard label="اطلاعات حساب کاربری">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              placeholder="ایمیل"
              disabled={true}
              {...getFieldProps('email')}
            />
            <CustomInput
              placeholder="شماره تلفن"
              disabled={!isEdit}
              {...getFieldProps('phoneNo')}
            />
          </div>

          <EditButton isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>
      </form>
    </OutlineCard>
  );
}

export default AccountInformation;
