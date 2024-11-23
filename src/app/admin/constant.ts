import Profile from '@/components/pages/profile';
import Users from '@/components/pages/users';

export const adminMenuItems: {
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
    title: 'لیست ادمین‌ها',
    content: Users,
    icon: 'fluent:task-list-square-rtl-16-regular',
  },
  {
    title: 'آژانس‌های مسافرتی',
    content: Users,
    icon: 'proicons:building-multiple',
  },
  { title: 'تور‌ها', content: Users, icon: 'fluent:earth-20-regular' },
  {
    title: 'لیست بلیط‌ها',
    content: Users,
    icon: 'fluent:task-list-square-rtl-16-regular',
  },
  {
    title: 'پاسخ به سوالات',
    content: Users,
    icon: 'mage:message-question-mark',
  },
  { title: 'خروج از حساب', content: Users, icon: 'solar:exit-outline' },
];
