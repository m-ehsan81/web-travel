import { useLoginMutation } from '@/lib/features/auth/auth-api-slice';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { LoginProps } from './type';

function LoginPage({ onClose }: LoginProps) {
  const [fetchLogin] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: '', password: '', isPersistent: false },
    onSubmit: async (values) => {
      const res = await fetchLogin(values).unwrap();

      if (res.isSuccess) {
        onClose();
      }
    },
  });

  const { getFieldProps, handleSubmit } = formik;

  return (
    <div className="mt-20 flex flex-col">
      <p className="text-right text-[20px] text-white">
        لطفا برای ورود ایمیل و پسورد خود را وارد کنید.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-end">
          <div className="mb-3 mt-12 flex w-full flex-col gap-8">
            <TextInput
              type="email"
              // icon={}
              placeholder="ایمیل"
              {...getFieldProps('email')}
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
            <TextInput
              type="password"
              // icon={}
              placeholder="رمز عبور"
              {...getFieldProps('password')}
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
          </div>

          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" {...getFieldProps('isPersistent')} />
              <Label htmlFor="promotion" className="text-white">
                مرا بخاطر بسپار
              </Label>
            </div>

            <p className="text-white">فراموشی رمز عبور؟</p>
          </div>

          <button
            type="submit"
            className="mt-12 rounded-[40px] bg-[#FC5C04] px-12 py-4 text-white"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
