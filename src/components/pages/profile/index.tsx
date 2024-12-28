import OutlineCard from '@/components/cards/outline-card';
import AccountInformation from './account-information';
import BankAccountInformation from './bank-account-information';
import PersonalInformation from './personal-information';
import { Icon } from '@iconify/react/dist/iconify.js';

function Profile() {
  return (
    <div className="flex grow flex-col gap-8">
      <OutlineCard>
        <div className="flex items-center gap-3">
          <Icon icon="codicon:account" fontSize={72} color="#FC5C04" />

          <div>
            <p className="text-[20px] font-bold">محمد احسان حکیم تبار</p>
            <p className="text-[18px]">09309427662</p>
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
