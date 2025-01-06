'use client';
import { useSignUpMutation } from '@/lib/features/auth/auth-api-slice';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { LoginProps } from '../login/type';

function SignUpPage({ onClose }: LoginProps) {
  const [fetchSignUp] = useSignUpMutation();
  const [showMessageBox, setShowMessageBox] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rePassword: '',
    },
    onSubmit: async (values) => {
      const res = await fetchSignUp(values).unwrap();

      if (res) {
        onClose();
        setShowMessageBox(true);
      }
    },
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
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
            <TextInput
              type="password"
              // icon={}
              placeholder="رمز عبور"
              {...getFieldProps('password')}
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
            <TextInput
              type="password"
              // icon={}
              placeholder="تکرار رمز عبور"
              {...getFieldProps('rePassword')}
              style={{ backgroundColor: 'transparent', color: 'white' }}
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

          <Modal
            show={showMessageBox}
            size="2xl"
            onClose={() => setShowMessageBox(false)}
            dismissible
            className="z-[1000]"
          >
            <Modal.Body className="login-bg rounded-md bg-cover p-0">
              <div className="flex flex-col items-center justify-center gap-6 bg-[#142D4D] py-6">
                <Icon icon="fluent-color:mail-20" fontSize={60} />
                <p className="text-white">
                  ما یک پیام به ایمیل وارد شده ارسال کرده ایم. لطفا آن را چک
                  کنید
                </p>

                <button
                  className="rounded-[40px] bg-[#FC5C04] px-8 py-4 text-white"
                  onClick={() => setShowMessageBox(false)}
                >
                  تایید و ادامه
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
