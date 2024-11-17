'use client';
import { useSignUpMutation } from '@/lib/features/auth/auth-api-slice';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

function SignUpPage() {
  const [fetchSignUp] = useSignUpMutation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rePassword: '',
    },
    onSubmit: (values) => fetchSignUp(values),
  });

  const { getFieldProps, handleSubmit } = formik;
  return (
    <div className="mt-10">
      <p className="text-right text-[20px] text-white">
        لطفا برای ثبت نام فیلد های زیر را تکمیل کنید.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-12 flex flex-col items-end">
          <div className="mb-3 flex w-full flex-col gap-8">
            <TextInput
              type="email"
              // icon={}
              placeholder="ایمیل"
              {...getFieldProps('email')}
              style={{ backgroundColor: 'transparent' }}
            />
            <TextInput
              type="password"
              // icon={}
              placeholder="رمز عبور"
              {...getFieldProps('password')}
              style={{ backgroundColor: 'transparent' }}
            />
            <TextInput
              type="rePassword"
              // icon={}
              placeholder="تکرار رمز عبور"
              {...getFieldProps('rePassword')}
              style={{ backgroundColor: 'transparent' }}
            />
          </div>

          <div className="flex w-full items-center gap-2">
            <Checkbox id="promotion" {...getFieldProps('isPersistent')} />
            <Label htmlFor="promotion" className="text-white">
              مرا بخاطر بسپار
            </Label>
          </div>

          <button
            type="submit"
            className="mt-12 rounded-[40px] bg-[#FC5C04] px-12 py-4 text-white"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
