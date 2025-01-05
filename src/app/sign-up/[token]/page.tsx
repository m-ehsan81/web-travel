'use client';

import { useEmailConfirmationMutation } from '@/lib/features/auth/auth-api-slice';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';

async function getToken(params: Promise<{ token: string }>) {
  return (await params).token;
}

function SignUp({ params }: { params: Promise<{ token: string }> }) {
  const [token, setToken] = useState<string | null>(null);
  const [fetcEmail, { isLoading, isError }] = useEmailConfirmationMutation();

  useEffect(() => {
    const fetchToken = async () => {
      const resolvedToken = await getToken(params);
      setToken(resolvedToken);
      await fetcEmail({ token: resolvedToken });
    };
    fetchToken();
  }, [params, fetcEmail]);

  if (isLoading) {
    return <p>در حال بارگذاری...</p>; // Loading state
  }

  if (isError) {
    return <p>خطا در تأیید ایمیل، لطفاً دوباره تلاش کنید.</p>; // Error state
  }

  return (
    <div>
      <Icon icon="mdi:tick-circle" color="green" />
      <p>ثبت نام با موفقیت انجام شد</p>

      <p>Post: {token}</p>

      <Link href="/">برگشت به صفحه اصلی</Link>
    </div>
  );
}

export default SignUp;
