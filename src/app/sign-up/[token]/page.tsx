'use client';

import { useEffect } from 'react';
import { useEmailConfirmationQuery } from '@/lib/features/auth/auth-api-slice';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

function SignUp({ params }: { params: { token: string } }) {
  const { token } = params;
  const { isLoading, isError } = useEmailConfirmationQuery({ token });

  useEffect(() => {
    if (isError) {
      console.error('Email confirmation error:', isError);
    }
  }, [isError]);

  if (isLoading) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center">
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center">
        <p>خطا در تأیید ایمیل، لطفاً دوباره تلاش کنید.</p>
      </div>
    );
  }

  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center gap-4">
      <Icon icon="mdi:tick-circle" color="green" fontSize={70} />
      <p>ثبت نام با موفقیت انجام شد</p>

      <Link href="/" className="text-blue-700">
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default SignUp;
