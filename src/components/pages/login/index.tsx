'use client';
import { useLoginMutation } from '@/lib/features/auth/auth-api-slice';
import { useFormik } from 'formik';
import React from 'react';

function LoginPage() {
  const [fetchLogin] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => fetchLogin(values),
  });

  const { getFieldProps, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <input {...getFieldProps('email')} placeholder="email" type="text" />
      <input
        {...getFieldProps('password')}
        placeholder="password"
        type="password"
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default LoginPage;
