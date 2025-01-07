import OutlineCard from '@/components/cards/outline-card';
import AccountInformation from './account-information';
import BankAccountInformation from './bank-account-information';
import PersonalInformation from './personal-information';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useUserInfoQuery } from '@/lib/features/user-info/user-api-slice';

function Profile() {
  const { data } = useUserInfoQuery();

  return (
    <div className="flex grow flex-col gap-8">
      <OutlineCard>
        <div className="flex items-center gap-3">
          <Icon icon="codicon:account" fontSize={72} color="#FC5C04" />

          <div>
            <p className="text-[20px] font-bold">
              {data?.data.name && data?.data.lastName
                ? data?.data.name + ' ' + data?.data.lastName
                : 'نام و نام خانوادگی وارد نشده است'}
            </p>
            <p className="text-[18px]">{data?.data.phoneNo || '09*********'}</p>
          </div>
        </div>
      </OutlineCard>

      <AccountInformation />

      <PersonalInformation />

      <BankAccountInformation />
    </div>
  );
}

export default Profile;
