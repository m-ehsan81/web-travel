import { MyTravel } from '@/components/pages/MyTravel';
import Profile from '@/components/pages/profile';
import Tickets from '@/components/pages/tickets';
// import AddTicket from '@/components/pages/tickets/addTicket';
import AddTour from '@/components/pages/tours/addTour';
import Users from '@/components/pages/users';

export const userMenuItems: {
  title: string;
  content: () => JSX.Element;
  icon: string;
}[] = [
  { title: 'پروفایل', content: Profile, icon: 'mage:user-square' },
  {
    title: 'لیست کاربران',
    content: Users,
    icon: 'fluent:task-list-square-rtl-16-regular',
  },
  {
    title: 'سفرهای من',
    content: MyTravel,
    icon: 'fluent:task-list-square-rtl-16-regular',
  },
  {
    title: 'آژانس‌های مسافرتی',
    content: Users,
    icon: 'proicons:building-multiple',
  },
  {
    title: 'لیست مسافران',
    content: Users,
    icon: 'proicons:building-multiple',
  },
  {
    title: 'درخواست پشتیبانی',
    content: Users,
    icon: 'proicons:building-multiple',
  },
  {
    title: 'علاقه مندی ها',
    content: Users,
    icon: 'proicons:building-multiple',
  },

  { title: 'خروج از حساب', content: Users, icon: 'solar:exit-outline' },
];
